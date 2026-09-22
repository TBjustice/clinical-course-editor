import type React from 'react';
import styles from './IconButton.module.css'

export function IconButtonOutline({ icon_name, children, onClick }: {
  icon_name: string,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className={children ? `${styles.icon_button} has-tooltip` : styles.icon_button}
      onClick={onClick}>
      <span className='material-icons-outlined'>{icon_name}</span>
      {children}
    </button>
  );
}

export function IconButton({ icon_name, children, onClick }: {
  icon_name: string,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className={children ? `${styles.icon_button} has-tooltip` : styles.icon_button}
      onClick={onClick}>
      <span className='material-icons'>{icon_name}</span>
      {children}
    </button>
  );
}
