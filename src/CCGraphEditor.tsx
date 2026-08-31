import { useState } from "react"
import './CCGraphEditor.css'

export default function CCGraphEditor({ uuid, dispatch }: { uuid: string, dispatch: CallableFunction }) {
  const [isDeleteDialogOpened, setDeleteDialogOpened] = useState(false);
  const [name, setName] = useState('Untitled Graph');

  function openDeleteDialog() {
    setDeleteDialogOpened(true);
  }

  function closeDeleteDialog(yes: boolean) {
    if (yes) {
      dispatch({ type: 'DELETE_DATA', payload: uuid });
    }
    setDeleteDialogOpened(false);
  }

  return (
    <>
      <header className='editor-header'>
        <input type='text' id='ccgraph-name' className='ccgraph-name' value={name} onChange={(event) => {
          setName(event.target.value);
        }} />
        <button onClick={openDeleteDialog}>
          <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M17 4 28 4A1 1 0 0128 6L4 6A1 1 0 014 4L15 4 15 2A1 1 0 0117 2ZM26 31 6 31 4 9A1 1 0 016 9L8 29 24 29 26 9A1 1 0 0128 9ZM9 10 10 26 12 26 11 10ZM15 10 15 26 17 26 17 10ZM21 10 20 26 22 26 23 10Z" fill="#f00" />
          </svg>
        </button>
      </header>
      <p>AAA</p>
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