import { useEffect, useRef, useState } from 'react';
import styles from './TableEdit.module.css'

export type TableData = {
  header: string[],
  data: string[][]
}

type CellMode = 'NONE' | 'FOCUS' | 'INPUT' | 'EDIT';
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

type ActiveCellState = {
  row: number,
  col: number,
  mode: CellMode
}

type TableAction =
  | { type: 'SET_VALUE', payload: string }
  | { type: 'SET_MODE', payload: CellMode }
  | { type: 'MOVE_FOCUS', payload: Direction }
  | { type: 'ADD_ROW', payload: number }
  | { type: 'DELETE_ROW', payload: number }

type TableEventFunction = (action: TableAction) => void;

function ActiveCell({ value, mode, tableEventFunction }: {
  value: string,
  mode: CellMode
  tableEventFunction: TableEventFunction
}) {
  const KeyDirectionLut = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT',
    Tab: 'RIGHT',
    Enter: 'DOWN',
  } as const;

  switch (mode) {
    case 'EDIT':
      return (
        <input
          value={value}
          name='table-input'
          onKeyDown={(event) => {
            switch (event.key) {
              case 'ArrowDown':
              case 'ArrowUp':
              case 'Tab':
                event.preventDefault();
                tableEventFunction({
                  type: 'MOVE_FOCUS',
                  payload: KeyDirectionLut[event.key]
                });
                break;
              case 'Enter':
                event.preventDefault();
                tableEventFunction({
                  type: 'SET_MODE',
                  payload: 'FOCUS'
                });
                break;
            }
          }}
          onChange={(event) => {
            tableEventFunction({
              type: 'SET_VALUE',
              payload: event.target.value
            });
          }}
          autoFocus />
      );
    case 'INPUT':
      return (
        <input
          value={value}
          name='table-input'
          onKeyDown={(event) => {
            switch (event.key) {
              case 'ArrowDown':
              case 'ArrowUp':
              case 'ArrowLeft':
              case 'ArrowRight':
              case 'Tab':
              case 'Enter':
                event.preventDefault();
                tableEventFunction({
                  type: 'MOVE_FOCUS',
                  payload: KeyDirectionLut[event.key]
                });
                break;
            }
          }}
          onChange={(event) => {
            tableEventFunction({
              type: 'SET_VALUE',
              payload: event.target.value
            });
          }}
          autoFocus />
      );

    case 'FOCUS':
      return (
        <div className={styles.active_cell}>
          <span>{value}</span>
          <input
            value={''}
            name='table-input'
            onKeyDown={(event) => {
              switch (event.key) {
                case 'ArrowDown':
                case 'ArrowUp':
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'Tab':
                case 'Enter':
                  event.preventDefault();
                  tableEventFunction({
                    type: 'MOVE_FOCUS',
                    payload: KeyDirectionLut[event.key]
                  });
                  break;
                case 'Backspace':
                  tableEventFunction({
                    type: 'SET_VALUE',
                    payload: ''
                  });
                  break;
              }
            }}
            onChange={(event) => {
              tableEventFunction({
                type: 'SET_MODE',
                payload: 'INPUT'
              });
              tableEventFunction({
                type: 'SET_VALUE',
                payload: event.target.value
              });
            }}
            style={{ opacity: 0.0, width: 0 }}
            autoFocus />
        </div>
      );
    default:
      return (<>{value}</>);
  }
}

function TableRow({ row, rowIdx, activeCellState, tableEventFunction }: {
  row: string[],
  rowIdx: number,
  activeCellState: ActiveCellState,
  tableEventFunction: TableEventFunction
}) {
  return (
    <tr>
      {row.map((value, colIdx) => {
        const isActive = (rowIdx == activeCellState.row && colIdx == activeCellState.col);
        return (
          <td
            key={colIdx}
            className={isActive ? 'cell active' : 'cell'}
            data-row={rowIdx} data-col={colIdx}>
            {isActive ? (
              <ActiveCell
                value={value}
                mode={activeCellState.mode}
                tableEventFunction={tableEventFunction} />
            ) : (
              <>{value}</>
            )}
          </td>);
      })}
    </tr>
  );
}

export default function TableEdit({ tableData, setTableData }: { tableData: TableData, setTableData: (value: TableData)=>void }) {
  const tableRef = useRef<HTMLTableElement>(null);
  const [activeCellState, setActiveCell] = useState<ActiveCellState>({ row: -1, col: -1, mode: 'FOCUS' });
  const header = tableData.header;
  const data = tableData.data;

  function getCellPos(clicked: Element | null) {
    if (!(clicked instanceof HTMLElement)) return null;
    if (clicked.dataset.row == undefined || clicked.dataset.col == undefined) return null;
    const row = parseInt(clicked.dataset.row);
    const col = parseInt(clicked.dataset.col);
    return { row, col };
  }

  function onTableClicked(event: React.MouseEvent<HTMLTableElement, MouseEvent>) {
    const pos = getCellPos((event.target as HTMLElement).closest('.cell'));
    if (pos == null) return;
    if (activeCellState.row == pos.row && activeCellState.col == pos.col) return;
    setActiveCell({ row: pos.row, col: pos.col, mode: 'FOCUS' });
  }

  function onTableDoubleClicked(event: React.MouseEvent<HTMLTableElement, MouseEvent>) {
    const pos = getCellPos((event.target as HTMLElement).closest('.cell'));
    if (pos == null) return;
    setActiveCell({ row: pos.row, col: pos.col, mode: 'EDIT' });
  }

  function onSetValue(newValue: string) {
    if (activeCellState.row == data.length) {
      const newData = [...tableData.data];
      newData.push(Array(header.length).fill(''));
      newData[activeCellState.row][activeCellState.col] = newValue;
      setTableData({
        ...tableData,
        data: newData
      });
    }
    else {
      setTableData({
        ...tableData,
        data: tableData.data.map((colValue, row) => {
          if (row != activeCellState.row) return colValue;
          return colValue.map((value, col) => {
            if (col != activeCellState.col) return value;
            else return newValue;
          });
        })
      });
    }
  }

  function onMoveFocus(direction: Direction) {
    switch (direction) {
      case 'UP':
        setActiveCell({
          row: Math.max(activeCellState.row - 1, 0),
          col: activeCellState.col,
          mode: 'FOCUS'
        });
        break;
      case 'DOWN':
        setActiveCell({
          row: Math.min(activeCellState.row + 1, data.length),
          col: activeCellState.col,
          mode: 'FOCUS'
        });
        break;
      case 'LEFT':
        setActiveCell({
          row: activeCellState.row,
          col: Math.max(activeCellState.col - 1, 0),
          mode: 'FOCUS'
        });
        break;
      case 'RIGHT':
        setActiveCell({
          row: activeCellState.row,
          col: Math.min(activeCellState.col + 1, header.length - 1),
          mode: 'FOCUS'
        });
        break;
      default:
        break;
    }
  }

  function tableEventFunction(action: TableAction) {
    switch (action.type) {
      case 'SET_VALUE':
        onSetValue(action.payload);
        break;
      case 'MOVE_FOCUS':
        onMoveFocus(action.payload)
        break;
      case 'SET_MODE':
        setActiveCell({ ...activeCellState, mode: action.payload })
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const onGlobalClick = (event: MouseEvent) => {
      if (tableRef.current && event.target && !tableRef.current.contains(event.target as Element)) {
        setActiveCell({ col: -1, row: -1, mode: 'NONE' })
      }
    };
    document.addEventListener('click', onGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', onGlobalClick, { capture: true });
    };
  }, []);

  return (
    <>
      <table
        ref={tableRef}
        className={styles.table}
        onClick={onTableClicked}
        onDoubleClick={onTableDoubleClicked}>
        <thead className={styles.thead}>
          <tr>
            {header.map((value, col) => {
              return (<th key={col}>{value}</th>);
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((row, rowIdx) => {
            return (
              <TableRow
                key={rowIdx}
                row={row}
                rowIdx={rowIdx}
                activeCellState={activeCellState}
                tableEventFunction={tableEventFunction} />
            );
          })}
          <TableRow
            row={Array(header.length).fill('')}
            rowIdx={data.length}
            activeCellState={activeCellState}
            tableEventFunction={tableEventFunction} />
        </tbody>
      </table>
    </>
  );
}