"use client";

import Link from "next/link";
import classes from "./nav-list.module.scss";
import { usePathname } from "next/navigation";

interface NavProps {
  subtitle: string;
  listItems: string[];
}

const NavList: React.FC<NavProps> = ({ listItems, subtitle }) => {
  const pathName = usePathname();

  return (
    <ul className={classes.nav__list}>
      <h3 className={classes["nav__list--subtitle"]}>{subtitle}</h3>
      {listItems.map((el, index) => (
        <li
          key={index}
          className={pathName == `/${el}` ? classes["nav__list--active"] : ""}
        >
          <Link href={`/${el}`}>{el}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
