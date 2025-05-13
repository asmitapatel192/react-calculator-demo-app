import styles from "./Display.module.css";
//  banne mathi aek chale
// import styles from "../App.module.css";

function Display({ input }) {
  return (
    <input type="text" value={input} className={styles.display} readOnly />
  );
}
export default Display;
