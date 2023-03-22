import Image from "next/image";
import React from "react";
import styles from "../../styles/Header.module.scss";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image alt="logo" src={logo} className={styles.img} />
        </div>
        <div className={styles.hamburguer}>
          <Image alt="logo" src={hamburger} />
        </div>
      </div>
    </nav>
  );
};
