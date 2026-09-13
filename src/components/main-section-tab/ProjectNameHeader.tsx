import styles from './ProjectNameHeader.module.css'
import { SidebarOpenContext } from '../../contexts/AppContexts';
import { useContext, useState } from 'react';
import Dialog from '../ui/Dialog ';

export function ProjectNameHeader({ }: {}) {
  const sidebarOpen = useContext(SidebarOpenContext);
  if (!sidebarOpen) {
    throw new Error('SidebarOpenContext must be used within a provider');
  }
  const [renameDialogOpen, setRenameDialogOpen] = useState(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = useState(false);
  const [namingText, setNamingText] = useState('');

  return (
    <header className={styles.header}>
      <button
        className={`${styles.toggle_sidebar} has-tooltip`}
        onClick={() => { sidebarOpen.setValue(!sidebarOpen.value) }}>
        <span className='material-icons'>{sidebarOpen.value ? 'menu_open' : 'keyboard_arrow_right'}</span>
        <div className='tooltip-right tooltip'>
          {sidebarOpen.value ? 'Close Sidebar' : 'Open Sidebar'}
        </div>
      </button>
      <div className={styles.project_name}>
        Untitled Project
      </div>
      <menu className={styles.header_menu}>
        <button
          className='has-tooltip'
          onClick={() => { setRenameDialogOpen(true); }}>
          <span className='material-icons-outlined'>edit</span>
          <div className='tooltip-right tooltip'>Rename Project</div>
        </button>
        <button
          className='has-tooltip'
          onClick={() => { setSaveAsDialogOpen(true); }}>
          <span className='material-icons-outlined'>save_as</span>
          <div className='tooltip-right tooltip'>Save As</div>
        </button>
      </menu>

      <Dialog
        isOpen={renameDialogOpen}
        onCancelDialog={() => {
          setRenameDialogOpen(false);
        }}>
        <header>Rename this Project</header>
        <input
          type='text' id='rename-dialog-input' value={namingText}
          onChange={(event) => { setNamingText(event.target.value); }} autoFocus />
        <menu>
          <button
            onClick={() => {
              setRenameDialogOpen(false);
            }}>Cancel</button>
          <button
            onClick={() => {
              setRenameDialogOpen(false);
              console.log('rename', namingText);
            }}>Yes</button>
        </menu>
      </Dialog >

      <Dialog
        isOpen={saveAsDialogOpen}
        onCancelDialog={() => {
          setSaveAsDialogOpen(false);
        }}>
        <header>Rename this Project</header>
        <input
          type='text' id='saveas-dialog-input' value={namingText}
          onChange={(event) => { setNamingText(event.target.value); }}
          autoFocus />
        <menu>
          <button
            onClick={() => {
              setSaveAsDialogOpen(false);
            }}>Cancel</button>
          <button
            onClick={() => {
              setSaveAsDialogOpen(false);
              console.log('saveas', namingText);
            }}>Yes</button>
        </menu>
      </Dialog >

    </header>
  );
}