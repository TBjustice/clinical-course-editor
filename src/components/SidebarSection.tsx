import { useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import logo from '../assets/logo.svg';
import styles from './SidebarSection.module.css'

function SidebarTab({ activeTab, onClickTab }: { activeTab: string, onClickTab:CallableFunction }) {
  return (
    <>
      <button
        className={activeTab === 'data' ? `${styles.item} active` : styles.item}
        onClick={() => { onClickTab('data'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>grid_on</span>
        <span className={styles.text}>Data</span>
      </button>
      <button
        className={activeTab === 'plot' ? `${styles.item} active` : styles.item}
        onClick={() => { onClickTab('plot'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>query_stats</span>
        <span className={styles.text}>Plot</span>
      </button>
      <button
        className={activeTab === 'export' ? `${styles.item} active` : styles.item}
        onClick={() => { onClickTab('export'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>file_download</span>
        <span className={styles.text}>Export</span>
      </button>
      <button
        className={activeTab === 'extension' ? `${styles.item} active` : styles.item}
        onClick={() => { onClickTab('extension'); }}>
        <span className={`material-icons-outlined ${styles.icon}`}>extension</span>
        <span className={styles.text}>Extension</span>
      </button>
    </>
  )
}

export default function SidebarSection({open, darkmode, setDarkmode, activeTab, onClickTab}: {open: boolean, darkmode:boolean, setDarkmode:CallableFunction, activeTab: string, onClickTab:CallableFunction}) {
  useState(true);
  return (
    <section className={open ? styles.sidebar : `${styles.sidebar} close`}>
      <header className={styles.item}>
        <img src={logo} alt='clicplot' />
        <h1>CliCPlot</h1>
      </header>
      <SidebarTab
        activeTab={activeTab}
        onClickTab={onClickTab} />
      <button className={`${styles.item} ${styles.bottom_item}`}
        onClick={() => {
          if (darkmode) document.documentElement.classList.remove('darkmode');
          else document.documentElement.classList.add('darkmode');
          setDarkmode(!darkmode);
        }}>
        <span className={`material-icons-outlined ${styles.icon}`}>{darkmode ? 'light_mode' : 'dark_mode'}</span>
        <span className={styles.text}>{darkmode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
      <button className={styles.item}>
        <span className={`material-icons-outlined ${styles.icon}`}>exit_to_app</span>
        <span className={styles.text}>Project List</span>
      </button>
    </section>
  )
}