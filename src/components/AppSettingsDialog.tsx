import { useState, type Dispatch, type SetStateAction } from "react";
import Dialog from "./ui/Dialog ";
import styles from "./AppSettingsDialog.module.css"

export function AppSettingsDialog({ stateIsOpen }: {
  stateIsOpen: [boolean,
    Dispatch<SetStateAction<boolean>>]
}) {
  const [darkmode, setDarkmode] = useState(false);
  const [language, SetLanguage] = useState('en');

  function onDarkmodeChange(value: string) {
    if (value == 'light') {
      document.documentElement.classList.remove('darkmode');
      setDarkmode(false);
    }
    else {
      document.documentElement.classList.add('darkmode');
      setDarkmode(true);
    }
  }

  function onLanguageChange(value: string) {
    SetLanguage(value);
    document.documentElement.lang = value;
  }

  function onCloseDialog() {
    stateIsOpen[1](false);
  }

  return (
    <Dialog isOpen={stateIsOpen[0]} onCancelDialog={onCloseDialog}>
      <header>
        <span className='lang-en'>Settings</span>
        <span className='lang-jp'>設定</span>
      </header>
      <div>
        <div className={styles.item_name}>
          Language(言語)
        </div>
        <select
          name="select-language"
          value={language}
          className={styles.select}
          onChange={(event) => { onLanguageChange(event.target.value); }}>
          <option value="en">
            English(英語)
          </option>
          <option value="jp">
            Japanese(日本語)
          </option>
        </select>
      </div>
      <div>
        <div className={styles.item_name}>
          <span className='lang-en'>Theme</span>
          <span className='lang-jp'>テーマ</span>
        </div>
        <select
          name="select-dark-light" className={`${styles.select} lang-en`}
          value={darkmode ? 'dark' : 'light'}
          onChange={(event) => { onDarkmodeChange(event.target.value); }}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
        <select
          name="select-dark-light" className={`${styles.select} lang-jp`}
          value={darkmode ? 'dark' : 'light'}
          onChange={(event) => { onDarkmodeChange(event.target.value); }}>
          <option value="light">通常モード</option>
          <option value="dark">ダークモード</option>
        </select>
      </div>
      <menu>
        <button onClick={onCloseDialog}>OK</button>
      </menu>
    </Dialog>);
}