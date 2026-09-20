import { useContext, useState, type Dispatch, type SetStateAction } from 'react';
import TableEdit, { type TableData } from '../ui/TableEdit';
import styles from './DataTab.module.css'
import stylesCmn from './common.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';
import { ProjectDataContext } from '../../contexts/ProjectContexts';
import type { CliCTable } from '../../types/CliCTypes';
import Dialog from '../ui/Dialog ';

function DataTabEditor({ activeIndex, setActiveIndex }: { activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>> }) {
  const projectData = useContext(ProjectDataContext);
  if (!projectData) {
    throw new Error('ProjectData must be used within a provider');
  }
  const [renameDialogIndex, setRenameDialogIndex] = useState(-1);
  const [renamingText, setRenamingText] = useState('');

  const tables = projectData.value.map((item) => item.name);
  const activeTable = activeIndex < 0 ? undefined : projectData.value[activeIndex];

  function addTable() {
    if (!projectData) return;
    projectData.setValue([
      ...projectData.value,
      {
        name: 'Untitled Table',
        header: [],
        datetime: [],
        data: []
      }
    ]);
  }

  function updateActiveTable(table: CliCTable) {
    if (!projectData) return;
    projectData.setValue(projectData.value.map((item, index) => {
      if (index == activeIndex) {
        return table;
      }
      return item;
    }))
  }

  function addColumn(active: CliCTable) {
    updateActiveTable({
      ...active,
      header: [...active.header, 'Untitled'],
      data: active.data.map((item) => [...item, ''])
    });
  }

  function renameTable(active: CliCTable, name: string) {
    updateActiveTable({
      ...active,
      name: name
    });
  }

  function renameHeader(active: CliCTable, index: number, name: string) {
    updateActiveTable({
      ...active,
      header: active.header.map((item, idx) => (
        idx === index ? name : item
      ))
    });
  }

  return (
    <div className={stylesCmn.list_and_editor}>
      <section className={stylesCmn.list_section}>
        <header>
          <span className='lang-en'>Table List</span>
          <span className='lang-jp'>テーブルリスト</span>
        </header>
        <div>
          {tables.map((item, index) => (
            <button
              key={index}
              className={`${stylesCmn.list_item} ${styles.list_item} ${activeIndex === index ? 'active' : ''}`}
              onClick={() => { setActiveIndex(index); }}>
              <span className={`material-icons-outlined icon`}>border_all</span>
              <span>{item}</span>
            </button>
          ))}
        </div>
        <button
          className={`${styles.add_button} has-tooltip`}
          onClick={addTable}>
          <span className={`material-icons-outlined`}>add</span>
          <span className='tooltip tooltip-right lang-en'>Add new table</span>
          <span className='tooltip tooltip-right lang-jp'>テーブルを追加</span>
        </button>
      </section>
      {activeTable && (
        <section className={stylesCmn.editor_section}>
          <header className={styles.table_name}>
            <input
              type="text" value={activeTable.name}
              onChange={(event) => {
                renameTable(activeTable, event.target.value)
              }} />
            <button className={styles.delete_button}>
              <span className="material-icons-outlined">delete_forever</span>
            </button>
          </header>
          <div className={styles.header_edit_wrap}>
            {activeTable.header.map((value, idx) => {
              return (
                <section key={idx}>
                  <header className={styles.header_edit_name}>
                    <div className={styles.header_name}>{value}</div>
                    <button
                      className="has-tooltip"
                      onClick={() => {
                        setRenamingText(value);
                        setRenameDialogIndex(idx);
                      }}>
                      <span className="material-icons-outlined">edit</span>
                      <div className="tooltip-left tooltip lang-en">Rename Column</div>
                      <div className="tooltip-left tooltip lang-jp">行の名前を変更</div>
                    </button>
                    <button className={styles.delete_button}>
                      <span className="material-icons-outlined">delete_forever</span>
                    </button>
                  </header>
                </section>
              );
            })}
            <button
              className={styles.add_column_button}
              onClick={() => { addColumn(activeTable) }}>
              <span className='lang-en'>Add Column</span>
              <span className='lang-jp'>行を追加</span>
            </button>
          </div>
          <Dialog
            isOpen={renameDialogIndex >= 0}
            onCancelDialog={() => { setRenameDialogIndex(-1); }}>
            <header>
              <span className='lang-en'>Rename Column</span>
              <span className='lang-jp'>行の名前を変更</span>
            </header>
            <input
              type="text" name='rename-column-dialog' value={renamingText}
              onChange={(event) => { setRenamingText(event.target.value); }} />
            <menu>
              <button onClick={() => { setRenameDialogIndex(-1); }}>Cancel</button>
              <button
                onClick={() => {
                  renameHeader(activeTable, renameDialogIndex, renamingText);
                  setRenameDialogIndex(-1);
                }}>
                OK
              </button>
            </menu>
          </Dialog>
        </section>
      )}
    </div>
  );
}

function DataTabView({ activeIndex }: { activeIndex: number }) {
  const projectData = useContext(ProjectDataContext);
  if (!projectData) {
    throw new Error('ProjectData must be used within a provider');
  }
  const activeTable = activeIndex < 0 ? undefined : projectData.value[activeIndex];

  if (!activeTable) return (<></>);

  const tableData: TableData = {
    header: ['Date', ...activeTable.header],
    data: []
  };
  for (let i = 0; i < activeTable.datetime.length; ++i) {
    const row = [activeTable.datetime[i]];
    activeTable.data[i].forEach((item) => {
      row.push(item === null ? '' : String(item));
    })
    tableData.data.push(row);
  }

  function setTableData(value: TableData) {
    if (!projectData) return;
    projectData.setValue(
      projectData.value.map((item, index) => {
        if (index != activeIndex) return item;
        return {
          ...item,
          datetime: value.data.map((row) => row[0]),
          data: value.data.map((row) => row.slice(1))
        };
      })
    );
  }

  return (
    <TableEdit tableData={tableData} setTableData={setTableData} />
  );
}

export function DataTab() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <DataTabEditor activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div className={`${stylesCmn.view} ${styles.view}`}>
        <DataTabView activeIndex={activeIndex} />
      </div>
    </>
  );
}
