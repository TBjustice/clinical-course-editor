import { useState } from 'react';
import TableEdit, { type TableData } from '../ui/TableEdit';

export function DataTabView() {
  const stateTableData = useState<TableData>({
    header: ['Date', 'label1', 'label2'],
    data: [
      ['2026/1/1', '24', '25'],
      ['2026/1/3', '32', '28'],
      ['2026/1/5', '36', '23']]
  });
  return (
    <TableEdit stateTableData={stateTableData} />
  );
}