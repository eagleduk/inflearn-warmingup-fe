import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

export default function Modal({
  isOpen,
  children,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);
  return createPortal(
    <dialog className={classes.modal} ref={dialogRef} onClick={onClose}>
      {children}
    </dialog>,
    document.getElementById("info") as HTMLDivElement
  );
}
