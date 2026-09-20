import { useContext, useState, type Dispatch, type SetStateAction } from 'react';
import TableEdit, { type TableData } from '../ui/TableEdit';
import styles from './DataTab.module.css'
import stylesCmn from './common.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';
import { ProjectDataContext } from '../../contexts/ProjectContexts';
import type { CliCTable } from '../../types/CliCTypes';
import Dialog from '../ui/Dialog ';
import TableEditEx, { type TableExData, type TableExItem } from '../ui/TableEditEx';
import ParseDate from '../../scripts/ParseDate';

function TableConfig({ table, setTable }: {
  table: CliCTable,
  setTable: (newTable: CliCTable) => void
}) {
  const [renameDialogIndex, setRenameDialogIndex] = useState(-1);
  const [addColumnDialogOpen, setAddColumnDialogOpen] = useState(false);
  const [tempText, setTempText] = useState('');

  function renameTable(newName: string) {
    setTable({
      ...table,
      name: newName
    });
  }

  function renameHeader(index: number, newName: string) {
    setTable({
      ...table,
      header: table.header.map((item, i) => {
        return i == index ? newName : item;
      })
    });
  }

  function addHeader(newName: string) {
    setTable({
      ...table,
      header: [...table.header, newName],
      data: table.data.map((item) => [...item, null])
    });
  }

  return (
    <section className={stylesCmn.editor_section}>
      <header className={styles.table_name}>
        <input
          type="text" value={table.name}
          onChange={(event) => {
            renameTable(event.target.value)
          }} />
        <button className={styles.delete_button}>
          <span className="material-icons-outlined">delete_forever</span>
        </button>
      </header>
      <div className={styles.header_edit_wrap}>
        {table.header.map((value, idx) => {
          return (
            <section key={idx}>
              <header className={styles.header_edit_name}>
                <div className={styles.header_name}>{value}</div>
                <button
                  className={`${styles.icon_button} has-tooltip`}
                  onClick={() => {
                    setTempText(value);
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
          onClick={() => {
            setTempText('');
            setAddColumnDialogOpen(true);
          }}>
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
          type="text" name='rename-column-dialog' value={tempText}
          onChange={(event) => { setTempText(event.target.value); }} />
        <menu>
          <button onClick={() => { setRenameDialogIndex(-1); }}>Cancel</button>
          <button
            onClick={() => {
              renameHeader(renameDialogIndex, tempText);
              setRenameDialogIndex(-1);
            }}>
            OK
          </button>
        </menu>
      </Dialog>
      <Dialog
        isOpen={addColumnDialogOpen}
        onCancelDialog={() => { setAddColumnDialogOpen(false); }}>
        <header>
          <span className='lang-en'>Add Column</span>
          <span className='lang-jp'>行を追加</span>
        </header>
        <input
          type="text" name='rename-column-dialog' value={tempText}
          onChange={(event) => { setTempText(event.target.value); }} />
        <menu>
          <button onClick={() => { setAddColumnDialogOpen(false); }}>Cancel</button>
          <button
            onClick={() => {
              addHeader(tempText);
              setAddColumnDialogOpen(false);
            }}>
            OK
          </button>
        </menu>
      </Dialog>
    </section>
  )
}

function DataTabEditor({ activeIndex, setActiveIndex }: { activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>> }) {
  const projectData = useContext(ProjectDataContext);
  if (!projectData) {
    throw new Error('ProjectData must be used within a provider');
  }

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
        <TableConfig table={activeTable} setTable={updateActiveTable} />
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
  const tableExData: TableExData = {
    header: ['Date', ...activeTable.header],
    data: []
  }
  if (activeTable.datetime.length != 0) {
    const now = new Date();
    let lastDate = {
      y: now.getFullYear(),
      m: now.getMonth() + 1,
      d: now.getDate(),
      added: ''
    };
    for (let i = 0; i < activeTable.datetime.length; ++i) {
      const ymd = ParseDate(activeTable.datetime[i], lastDate.y, lastDate.m);
      const row: TableExItem[] = [{
        isErr: ymd === undefined,
        prefix: ymd ? ymd.added : '',
        value: String(activeTable.datetime[i]),
        suffix: ''
      }];
      activeTable.data[i].forEach((item) => {
        row.push({
          isErr: false,
          prefix: '',
          value: item === null ? '' : String(item),
          suffix: ''
        });
      })
      tableExData.data.push(row);
      if (ymd) {
        lastDate = ymd;
      }
    }
  }
  for (let i = 0; i < activeTable.datetime.length; ++i) {
    const row = [activeTable.datetime[i]];
    activeTable.data[i].forEach((item) => {
      row.push(item === null ? '' : String(item));
    })
    tableData.data.push(row);
  }

  function setTableData(value: TableExData) {
    if (!projectData) return;
    projectData.setValue(
      projectData.value.map((item, index) => {
        if (index != activeIndex) return item;
        return {
          ...item,
          datetime: value.data.map((row) => row[0].value),
          data: value.data.map((row) => {
            return row.slice(1).map((item) => item.value);
          })
        };
      })
    );
  }

  /*
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
    <TableEdit tableData={tableData} setTableData={setTableData} />
  */
  return (
    <TableEditEx tableData={tableExData} setTableData={setTableData} />
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
