import SwitchTheme from "../switch-theme";
import { CiBellOn, CiFaceSmile, CiSearch } from "react-icons/ci";
import classes from "./header.module.scss";
import Button from "../UI/button";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__search}>
        <Button classes="btn-header">
          <CiSearch />
        </Button>
        <span className={classes["header__search--box"]}>search</span>
      </div>
      <div className={classes.header__icons}>
        <Button classes="btn-header">
          <FaGithub />
        </Button>
        <Button classes="btn-header">
          <CiBellOn />
        </Button>
        <SwitchTheme />
        <Button classes={classes.header__profile}>
          <CiFaceSmile />
        </Button>
      </div>
    </div>
  );
}
