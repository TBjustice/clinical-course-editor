import type React from "react";
import styles from "./Dialog.module.css"

export default function Dialog({ isOpen, onCancelDialog, children }: { isOpen: boolean, onCancelDialog: CallableFunction, children: React.ReactNode }) {
  if (!isOpen) return undefined;
  return (
    <div className={styles.wrapper} onClick={(event) => {
      event.stopPropagation();
      onCancelDialog();
    }}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}