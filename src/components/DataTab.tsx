import styles from './DataTab.module.css'
export function DataTabView() {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className='active'>Date</th>
          <th>Label 1</th>
          <th>Label 2</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        <tr>
          <th>2026/1/1</th>
          <td>24</td>
          <td className='active'>25</td>
        </tr>
        <tr>
          <th>2026/1/3</th>
          <td>32</td>
          <td>28</td>
        </tr>
        <tr>
          <th>2026/1/5</th>
          <td className='active'>36</td>
          <td>23</td>
        </tr>
      </tbody>
    </table>
  );
}