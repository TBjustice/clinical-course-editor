import { useState } from 'react';
import TableEdit, { type TableData } from '../ui/TableEdit';
import styles from './DataTab.module.css'
import stylesCmn from './common.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';

function DataTabEditor({ tables }: { tables: string[] }) {
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
      <section className={stylesCmn.editor_section}>

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

  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <DataTabEditor tables={['table 1', 'table 2']} />
      </div>
      <div className={stylesCmn.view}>
        <DataTabView stateTableData={stateTableData} />
      </div>
    </>
  );
}
