import { useState } from 'react';
import TableEdit, { type TableData } from '../ui/TableEdit';
import styles from './DataTab.module.css'
import stylesCmn from './common.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';

function DataTabEditor({ tables }: { tables: string[] }) {
  return (
    <div className={stylesCmn.list_and_editor}>
      <section className={stylesCmn.list_section}>
        <header>
          Table List
        </header>
        <div>
          {tables.map((item, index) => (
            <button key={index} className={`${stylesCmn.list_item} ${styles.list_item}`}>
              <span className={`material-icons-outlined icon`}>border_all</span>
              <span>{item}</span>
            </button>
          ))}
        </div>
      </section>
      <section>

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
    header: ['Date', 'label1', 'label2'],
    data: [
      ['2026/1/1', '24', '25'],
      ['2026/1/3', '32', '28'],
      ['2026/1/5', '36', '23']]
  });

  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <DataTabEditor tables={['table 1', 'table 2']} />
      </div>
      <div className={stylesCmn.view}>
        <DataTabView stateTableData={stateTableData}/>
      </div>
    </>
  );
}
