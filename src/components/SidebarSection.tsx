import { useContext, useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import logo from '../assets/logo.svg';
import styles from './SidebarSection.module.css'
import { SidebarOpenContext } from "../contexts/AppContexts";
import { AppSettingsDialog } from "./AppSettingsDialog";

function SidebarTab({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: CallableFunction }) {
  return (
    <>
      <button
        className={activeTab === 'data' ? `${styles.item} active` : styles.item}
        onClick={() => { setActiveTab('data'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>grid_on</span>
        <span className={`${styles.text} lang-en`}>Data</span>
        <span className={`${styles.text} lang-jp`}>データ</span>
      </button>
      <button
        className={activeTab === 'plot' ? `${styles.item} active` : styles.item}
        onClick={() => { setActiveTab('plot'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>query_stats</span>
        <span className={`${styles.text} lang-en`}>Plot</span>
        <span className={`${styles.text} lang-jp`}>グラフ</span>
      </button>
      <button
        className={activeTab === 'export' ? `${styles.item} active` : styles.item}
        onClick={() => { setActiveTab('export'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>file_download</span>
        <span className={`${styles.text} lang-en`}>Export</span>
        <span className={`${styles.text} lang-jp`}>エクスポート</span>
      </button>
      <button
        className={activeTab === 'plugin' ? `${styles.item} active` : styles.item}
        onClick={() => { setActiveTab('plugin'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>extension</span>
        <span className={`${styles.text} lang-en`}>Plugin</span>
        <span className={`${styles.text} lang-jp`}>プラグイン</span>
      </button>
    </>
  )
}

export default function SidebarSection({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: CallableFunction }) {
  const sidebarOpen = useContext(SidebarOpenContext);
  if (!sidebarOpen) {
    throw new Error('SidebarOpenContext must be used within a provider');
  }
  const stateAppSettingsDialogOpen = useState(false);
  return (
    <section className={sidebarOpen.value ? styles.sidebar : `${styles.sidebar} close`}>
      <header className={styles.item}>
        <img src={logo} alt='clicplot' />
        <h1>CliCPlot</h1>
      </header>
      <SidebarTab
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
      <button
         className={`${styles.item} ${styles.bottom_item}`}
        onClick={() => { stateAppSettingsDialogOpen[1](true); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>settings</span>
        <span className={`${styles.text} lang-en`}>Settings</span>
        <span className={`${styles.text} lang-jp`}>設定</span>
      </button>
      <button className={styles.item}>
        <span className={`material-icons-outlined ${styles.icon}`}>exit_to_app</span>
        <span className={`${styles.text} lang-en`}>Project List</span>
        <span className={`${styles.text} lang-jp`}>保存して戻る</span>
      </button>
      <AppSettingsDialog stateIsOpen={stateAppSettingsDialogOpen} />
    </section>
  )
}