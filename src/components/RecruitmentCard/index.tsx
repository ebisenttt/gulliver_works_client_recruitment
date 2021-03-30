import React from "react";
import Avator from "../../atoms/Avator/Index";
import styles from "./style.module.scss";
import defaultImage from "./cardDefault.png"

type Props = {
  imageSrc?: string;
  title: string;
  companyName: string;
}

const RecruitmentCard: React.FC<Props> = ({imageSrc=defaultImage, title,　companyName}) => (
  <div className={styles.card}>
    <img className={styles.cardImage} src={imageSrc}/>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.company}>
      <Avator size="small"/>
      <div className={styles.companyName}>{companyName}</div>
    </div>
  </div>
);

export default RecruitmentCard;
