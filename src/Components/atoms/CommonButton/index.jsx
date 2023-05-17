import styles from "./styles.module.css";

export const CommonButton = (props) => {
  const { type, label, onChange } = props;
  return (
    <button className={styles.button} type={type} onChange={onChange}>
      {label}
    </button>
  );
};
