import { useState } from "react";
import styles from "./LinksList.module.css";

export default function LinksList(props) {
  const [copied, setCopied] = useState(null);
  return (
    <div>
      {props.links.map((link) => {
        return (
          <div key={link.id} className={styles.card}>
            <p className={styles.original}>{link.original}</p>
            <hr />
            <div>
              <p className={styles.short}>{link.short}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(link.short);
                  setCopied(link.id);
                }}
                className={`${styles.copy} ${
                  copied === link.id ? styles.copied : undefined
                }`}
              >
                {copied === link.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
