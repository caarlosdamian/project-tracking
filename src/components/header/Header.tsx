import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import styles from "../../styles/Header.module.scss";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import { links } from "../menu/Menu";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setShowMenu, showMenu }: Props) => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image alt="logo" src={logo} className={styles.img} />
        </div>
        <div className={styles.hamburguer}>
          {showMenu ? (
            <Image alt="close" src={close} onClick={() => setShowMenu(false)} />
          ) : (
            <Image
              alt="hamburguer"
              src={hamburger}
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
        <div className={styles.menuheader}>
          {links.map((item) => (
            <span key={item.id} className={styles.label}>
              {item.label}
            </span>
          ))}
          <div className={styles.menucircle}></div>
          <span className={styles.labelLogin}>LOGIN</span>
        </div>
      </div>
    </nav>
  );
};
