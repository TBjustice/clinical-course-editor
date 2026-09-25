import { useState } from 'react';
import styles from './DataTab.module.css'
import stylesCmn from './common.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';
import type { CliCTable } from '../../types/CliCTypes';
import Dialog from '../ui/Dialog ';
import TableEditEx, { type TableExData, type TableExItem } from '../ui/TableEditEx';
import ParseDate from '../../scripts/ParseDate';
import { IconButtonOutline } from '../ui/IconButton';
import { useProjectDataStore } from '../../stores/ProjectDataStore';

function TableConfig({ table, setTable }: {
  table: CliCTable,
  setTable: (newTable: CliCTable) => void
}) {
  const [renameDialogIndex, setRenameDialogIndex] = useState(-1);
  const [addColumnDialogOpen, setAddColumnDialogOpen] = useState(false);
  const [tempText, setTempText] = useState('');

  const [deleteTableDialogOpen, setDeleteTableDialogOpen] = useState(false);
  const deleteActiveTable = useProjectDataStore((state) => state.deleteActiveTable);

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
        return i == index ? { ...item, name: newName } : item;
      })
    });
  }

  function addHeader(newName: string) {
    setTable({
      ...table,
      header: [...table.header, { uuid: crypto.randomUUID(), name: newName }],
      data: table.data.map((item) => [...item, null])
    });
  }

  return (
    <section className={stylesCmn.editor_section}>
      <header className={styles.table_name}>
        <input
          type="text" value={table.name} name='table_name'
          onChange={(event) => {
            renameTable(event.target.value)
          }} />
        <button
          className={styles.delete_button}
          onClick={() => { setDeleteTableDialogOpen(true); }}>
          <span className="material-icons-outlined">delete_forever</span>
        </button>
      </header>
      <div className={styles.header_edit_wrap}>
        {table.header.map((value, idx) => {
          return (
            <section key={idx}>
              <header className={styles.header_edit_name}>
                <div className={styles.header_name}>{value.name}</div>
                <IconButtonOutline
                  icon_name='edit'
                  onClick={() => {
                    setTempText(value.name);
                    setRenameDialogIndex(idx);
                  }}>
                  <div className="tooltip-left tooltip lang-en">Rename Column</div>
                  <div className="tooltip-left tooltip lang-jp">行の名前を変更</div>
                </IconButtonOutline>
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
      <Dialog
        isOpen={deleteTableDialogOpen}
        onCancelDialog={() => {
          setDeleteTableDialogOpen(false);
        }}>
        <header>
          <span className='lang-en'>Do you really want to delete this table?</span>
          <span className='lang-jp'>本当にこのテーブルを削除しても良いですか?</span>
        </header>
        <p>
          <span className='lang-en'>All the content are deleted permanently.</span>
          <span className='lang-jp'>内容は完全に消去されます。</span>
        </p>
        <menu>
          <button
            onClick={() => {
              setDeleteTableDialogOpen(false);
            }}>Cancel</button>
          <button
            onClick={() => {
              setDeleteTableDialogOpen(false);
              deleteActiveTable();
            }}>Yes</button>
        </menu>
      </Dialog >
    </section>
  )
}

function DataTabEditor() {
  const tableList = useProjectDataStore((state) => state.tableList);
  const activeTableIndex = useProjectDataStore((state) => state.activeTableIndex);
  const setActiveTableIndex = useProjectDataStore((state) => state.setActiveTableIndex);
  const updateActiveTable = useProjectDataStore((state) => state.updateActiveTable);
  const addTable = useProjectDataStore((state) => state.addTable);

  const tables = tableList.map((item) => item.name);
  const activeTable = activeTableIndex < 0 ? undefined : tableList[activeTableIndex];

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
              className={`${stylesCmn.list_item} ${styles.list_item} ${activeTableIndex === index ? 'active' : ''}`}
              onClick={() => { setActiveTableIndex(index); }}>
              <span className={`material-icons-outlined icon`}>border_all</span>
              <span>{item}</span>
            </button>
          ))}
        </div>
        <button className={styles.add_button} onClick={addTable}>
          <span className='lang-en'>Add New Table</span>
          <span className='lang-jp'>テーブルを追加</span>
        </button>
      </section>
      {activeTable && (
        <TableConfig table={activeTable} setTable={updateActiveTable} />
      )}
    </div>
  );
}

function DataTabView() {
  const activeTableIndex = useProjectDataStore((state) => state.activeTableIndex);
  const updateActiveTable = useProjectDataStore((state) => state.updateActiveTable);

  const activeTable = useProjectDataStore((state) => (activeTableIndex < 0 ? undefined : state.tableList[activeTableIndex]));

  if (!activeTable) return (<></>);

  const tableExData: TableExData = {
    header: ['Date', ...activeTable.header.map((item) => item.name)],
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

  function setTableData(value: TableExData) {
    if (activeTable) {
      updateActiveTable({
        ...activeTable,
        datetime: value.data.map((row) => row[0].value),
        data: value.data.map((row) => {
          return row.slice(1).map((item) => item.value);
        })
      });
    }
  }

  return (
    <TableEditEx tableData={tableExData} setTableData={setTableData} />
  );
}

export function DataTab() {

  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <DataTabEditor />
      </div>
      <div className={`${stylesCmn.view} ${styles.view}`}>
        <DataTabView />
      </div>
    </>
  );
}
