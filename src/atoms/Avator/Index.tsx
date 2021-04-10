import React from "react"
import styles from "./style.module.scss"
import defaultImage from "./avatorDefault.png"

type Props = {
  image?: string,
  size?: "small" | "large"
};

const Avator: React.FC<Props> = ({image=defaultImage, size}) => (
  <img src={image} className={styles.avator} data-size={size} />
);

export default Avator;