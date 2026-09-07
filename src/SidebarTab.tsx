import 'material-icons/iconfont/material-icons.css';

export default function SidebarTab({ activeTab, onClickSidebar }: { activeTab: string, onClickSidebar:CallableFunction }) {
  return (
    <>
      <button
        className={activeTab === 'data' ? 'sidebar-item active' : 'sidebar-item'}
        onClick={() => { onClickSidebar('data'); }}>
        <span className='material-icons-outlined sidebar-icon'>grid_on</span>
        <span className='sidebar-text'>Data</span>
      </button>
      <button
        className={activeTab === 'plot' ? 'sidebar-item active' : 'sidebar-item'}
        onClick={() => { onClickSidebar('plot'); }}>
        <span className='material-icons-outlined sidebar-icon'>query_stats</span>
        <span className='sidebar-text'>Plot</span>
      </button>
      <button
        className={activeTab === 'export' ? 'sidebar-item active' : 'sidebar-item'}
        onClick={() => { onClickSidebar('export'); }}>
        <span className='material-icons-outlined sidebar-icon'>file_download</span>
        <span className='sidebar-text'>Export</span>
      </button>
      <button
        className={activeTab === 'extension' ? 'sidebar-item active' : 'sidebar-item'}
        onClick={() => { onClickSidebar('extension'); }}>
        <span className='material-icons-outlined sidebar-icon'>extension</span>
        <span className='sidebar-text'>Extension</span>
      </button>
    </>
  )
}