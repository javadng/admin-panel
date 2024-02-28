import classes from "./nav.module.scss";
import NavList from "./nav-list";

const NavMenu = () => {
  return (
    <div className={classes.nav__menu}>
      <h1 className={classes["nav__menu--title"]}>Dash UI</h1>
      <div className={classes.nav__list}>
        <NavList listItems={["dashboard"]} subtitle="" />
        <NavList
          listItems={["authentication", "layouts"]}
          subtitle="Layouts & pages"
        />
        <NavList
          listItems={["docs", "changelog", "download"]}
          subtitle="Documentation"
        />
        <NavList
          listItems={["components", "menu level"]}
          subtitle="UI COMPONENTS"
        />
      </div>
    </div>
  );
};

export default NavMenu;
