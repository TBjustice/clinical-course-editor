import styles from './ProjectNameHeader.module.css'
import { SidebarOpenContext } from '../../contexts/AppContexts';
import { useContext, useState } from 'react';
import Dialog from '../ui/Dialog ';
import { IconButtonOutline } from '../ui/IconButton';

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
        <IconButtonOutline
          icon_name='edit'
          onClick={() => { setRenameDialogOpen(true); }}>
          <div className='tooltip-right tooltip lang-en'>Rename Project</div>
          <div className='tooltip-right tooltip lang-jp'>プロジェクト名の変更</div>
        </IconButtonOutline>
        <IconButtonOutline
          icon_name='save_as'
          onClick={() => { setSaveAsDialogOpen(true); }}>
          <div className='tooltip-right tooltip lang-en'>Save As</div>
          <div className='tooltip-right tooltip lang-jp'>名前を付けて保存</div>
        </IconButtonOutline>
      </menu>

      <Dialog
        isOpen={renameDialogOpen}
        onCancelDialog={() => {
          setRenameDialogOpen(false);
        }}>
        <header>
          <span className='lang-en'>Rename this Project</span>
          <span className='lang-jp'>プロジェクト名を変更</span>
        </header>
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
        <header>
          <span className='lang-en'>Save As</span>
          <span className='lang-jp'>名前を付けて保存</span>
        </header>
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