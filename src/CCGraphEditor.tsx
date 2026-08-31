import { useState } from 'react'
import './CCGraphEditor.css'
import type { CCGraphItem } from './CCGraph.tsx';

export default function CCGraphEditor({ uuid, ccgraphItem, dispatch }: { uuid: string, ccgraphItem: CCGraphItem, dispatch: CallableFunction }) {
  const [isDeleteDialogOpened, setDeleteDialogOpened] = useState(false);

  function openDeleteDialog() {
    setDeleteDialogOpened(true);
  }

  function closeDeleteDialog(yes: boolean) {
    if (yes) {
      dispatch({ type: 'DELETE_DATA', payload: uuid });
    }
    setDeleteDialogOpened(false);
  }

  function onGraphNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'SET_ITEM',
      payload: {
        uuid,
        ccgraphItem: { ...ccgraphItem, name: event.target.value }
      }
    });
  }

  function onGraphTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: 'SET_ITEM',
      payload: {
        uuid,
        ccgraphItem: { ...ccgraphItem, type: event.target.value }
      }
    });
  }

  function onGraphHeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'SET_ITEM',
      payload: {
        uuid,
        ccgraphItem: { ...ccgraphItem, height: parseInt(event.target.value) }
      }
    });
  }

  function onGraphDataChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: 'SET_ITEM',
      payload: {
        uuid,
        ccgraphItem: { ...ccgraphItem, data: event.target.value }
      }
    });
  }

  return (
    <>
      <header className='editor-header'>
        <input type='text' id='ccgraph-name' className='ccgraph-name' value={ccgraphItem.name} onChange={onGraphNameChange} />
        <button onClick={openDeleteDialog}>
          <svg width={24} height={24} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path d='M17 4 28 4A1 1 0 0128 6L4 6A1 1 0 014 4L15 4 15 2A1 1 0 0117 2ZM26 31 6 31 4 9A1 1 0 016 9L8 29 24 29 26 9A1 1 0 0128 9ZM9 10 10 26 12 26 11 10ZM15 10 15 26 17 26 17 10ZM21 10 20 26 22 26 23 10Z' fill='#f00' />
          </svg>
        </button>
      </header>
      <section className='ccgraph-select'>
        <header>Type</header>
        <select name='ccgraph-type' id='ccgraph-type' className='ccgraph-type' value={ccgraphItem.type} onChange={onGraphTypeChange}>
          <option>-----</option>
          <option value='line'>Line</option>
          <option value='step-area'>StepArea</option>
          <option value='timing'>Timing</option>
        </select>
      </section>
      <section className='ccgraph-range'>
        <header>Height</header>
        <div className='flexbox'>
          <input
            type="range" name="ccgraph-height" id="ccgraph-height" className='ccgraph-range'
            min={5} max={200} step={1}
            value={ccgraphItem.height}
            onChange={onGraphHeightChange} />
          <input
            type="number" className='ccgraph-range'
            value={ccgraphItem.height}
            onChange={onGraphHeightChange} />
        </div>
      </section>
      <section className='ccgraph-table'>
        <header>Table</header>
        <textarea
          name='ccgraph-table' id='ccgraph-table'
          value={ccgraphItem.data}
          onChange={onGraphDataChange}></textarea>
      </section>

      {isDeleteDialogOpened && (
        <div
          className='dialog-wrap'
          onClick={(event) => {
            event.stopPropagation();
            closeDeleteDialog(false);
          }}>
          <div className='dialog-content'>
            <header>Do you really want to delete this layer?</header>
            <p>All the content (including parameters and data) are deleted permanently.</p>
            <div className='dialog-menu'>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  closeDeleteDialog(false);
                }}>Cancel</button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  closeDeleteDialog(true);
                }}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}