import PropTypes from "prop-types"; //터미널에 npm i prop-types로 설치
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
  //검사창에서 보면 무작위적인 랜덤 class를 갖고있음
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
