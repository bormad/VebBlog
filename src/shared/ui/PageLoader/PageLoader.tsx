import styles from "./PageLoader.module.scss";
import { Loader } from "../Loader/Loader";
import { classNames } from "../../classNames/classNames";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
