import { useState } from "react";
import { classNames } from "../../../../shared/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { Button } from "../../../../shared/ui/Button/Button";
import { ThemeSwicher } from "../../../ThemeSwicher";
import { LangSwicher } from "../../../LangSwicher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>Toggle</Button>

      <div className={styles.switchers}>
        <ThemeSwicher />
        <LangSwicher />
      </div>
    </div>
  );
};
