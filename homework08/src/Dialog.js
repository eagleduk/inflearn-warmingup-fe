import { useEffect } from "react";

import classes from "./Dialog.module.css";

export default function Dialog(props) {
  useEffect(() => {
    let timeout = setTimeout(() => {
      props.onRemove(null);
    }, 3000);
    return () => clearTimeout(timeout);
  });

  let className = classes.dialog;
  if (props.state === "success") className += " " + classes.success;
  else if (props.state === "update") className += " " + classes.success;
  else if (props.state === "delete") className += " " + classes.delete;

  return <div className={className}>{props.text}</div>;
}
