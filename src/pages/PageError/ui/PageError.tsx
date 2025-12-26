import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/classNames/classNames";
import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      {t("An error occurred, please reload the page")}
    </div>
  );
};
