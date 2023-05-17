import styles from "./styles.module.css";

/**
 * BaseLayout
 * @param  children
 * @param  title
 * @returns {JSX.Element}
 * @constructor
 */
export const BaseLayout = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>{/* navigationが入る */}</section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
