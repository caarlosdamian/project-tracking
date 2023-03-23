import React from "react";
import styles from "../../styles/Details.module.scss";

export const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.header}>
        <span className={styles.new}>NEW</span>
        <span className={styles.title}>MONOGRAPH DASHBOARD</span>
      </div>
      <div className={styles.feature}>
        <span className={styles.title}>POWERFUL INSIGHTS INTO YOUR TEAM</span>
        <span className={styles.desc}>
          Project planning and time tracking for agile teams
        </span>
      </div>
      <div className={styles.control}>
        <button className={styles.primary}>SCHEDULE A DEMO</button>
        <span className={styles.secondary}>TO SEE A PREVIEW</span>
      </div>
    </div>
  );
};
