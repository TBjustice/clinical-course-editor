import { useState } from 'react';
import TableEdit, { type TableData } from '../ui/TableEdit';
import styles from './DataTab.module.css'
import stylesCmn from './common.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';

type TableHeaderEvent =
  | { action: 'ADD_HEADER' }
  | { action: 'RENAME_HEADER', payload: { index: number, value: string } }

function DataTabEditor({ tables, tableHeader, tableHeaderEventHandler }: { tables: string[], tableHeader: string[], tableHeaderEventHandler: (e: TableHeaderEvent) => void }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function addTable() {

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
      <section className={`${stylesCmn.editor_section} ${styles.header_edit_wrap}`}>
        {tableHeader.map((value, idx) => {
          return (
            <section key={idx}>
              <header className={styles.header_edit_name}>
                <input
                  type="text" value={value}
                  onChange={(event) => {
                    tableHeaderEventHandler({
                      action: 'RENAME_HEADER',
                      payload: { index: idx, value: event.target.value }
                    });
                  }} />
                <button className={styles.delete_button}>
                  <span className="material-icons-outlined">delete_forever</span>
                </button>
              </header>
            </section>
          );
        })}
        <button
          onClick={() => {
            tableHeaderEventHandler({
              action: 'ADD_HEADER'
            });
          }}>
          Add Table
        </button>
      </section>
    </div>
  );
}

function DataTabView({ stateTableData }: {
  stateTableData: [TableData, CallableFunction]
}) {
  return (
    <TableEdit stateTableData={stateTableData} />
  );
}

export function DataTab() {
  const stateTableData = useState<TableData>({
    header: ['Date', 'label1', 'label2', 'label3'],
    data: [
      ['2026/1/1', '24', '25', '0.3'],
      ['2026/1/3', '32', '28', '0.2'],
      ['2026/1/5', '36', '23', '0.5']]
  });

  function tableHeaderEventHandler(tableEvent: TableHeaderEvent) {
    const original = stateTableData[0];
    switch (tableEvent.action) {
      case 'ADD_HEADER':
        stateTableData[1]({
          header: [...original.header, 'Untitled'],
          data: original.data.map((item) => [...item, ''])
        });
        break;
      case 'RENAME_HEADER':
        stateTableData[1]({
          ...original,
          header: original.header.map((item, idx) => (
            (idx - 1) === tableEvent.payload.index ? tableEvent.payload.value : item
          ))
        });
        break;
    }
  }

  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <DataTabEditor tables={['table 1', 'table 2']} tableHeader={stateTableData[0].header.slice(1)} tableHeaderEventHandler={tableHeaderEventHandler} />
      </div>
      <div className={stylesCmn.view}>
        <DataTabView stateTableData={stateTableData} />
      </div>
    </>
  );
}
