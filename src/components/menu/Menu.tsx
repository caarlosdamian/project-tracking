import React from "react";
import styles from "../../styles/Menu.module.scss";

export const Menu = () => {
  const links = [
    {
      id: 1,
      label: "PRODUCT",
    },
    {
      id: 2,
      label: "FEATURES",
    },
    {
      id: 3,
      label: "PRICING",
    },
  ];

  return (
    <div className={styles.menu}>
      {links.map((item) => (
        <span key={item.id} className={styles.label}>
          {item.label}
        </span>
      ))}
      <hr />
      <span className={styles.login}>LOGIN</span>
    </div>
  );
};
