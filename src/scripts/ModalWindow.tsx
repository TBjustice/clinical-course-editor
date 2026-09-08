import type React from "react";

export default function ModalWindow({ isOpen, onCancelModal, children }: { isOpen: boolean, onCancelModal: CallableFunction, children: React.ReactNode }) {
  if (!isOpen) return undefined;
  return (
    <div className='modal-window-bg' onClick={(event) => {
      event.stopPropagation();
      onCancelModal();
    }}>
      <div className='modal-window-content'>
        {children}
      </div>
    </div>
  );
}