import Image from "next/image";
import arrow from "../../../public/arrow.svg";

import { ButtonIconProps } from "../../@types";
import styles from "./buttonicon.module.css";

export default function ButtonIcon({ label }: ButtonIconProps) {
  return (
    <div className={`d-flex ${styles.buttonContainer}`}>
      <button className={`btn btn-primary ${styles.btnIcon}`}>
        <h5>{label}</h5>
      </button>
      <div className={styles.btnIconContent}>
        <Image src={arrow} alt="Arrow" />
      </div>
    </div>
  );
}
