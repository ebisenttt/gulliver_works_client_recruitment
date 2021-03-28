import React from "react";
import Avator from "../../atoms/Avator";
import styles from "./style.module.scss";
import defaultImg from "./cardDefault.png"

type Props = {
  imageSrc?: string;
  title: string;
  companyName: string;
}

const RecruitmentCard: React.FC<Props> = ({imageSrc, title,　companyName}) => {

  return (
    <div className={styles.card}>
        <img className={styles.cardImage} src={imageSrc}/>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.company}>
          <Avator size='medium'/>
          <div className={styles.companyName}>{companyName}</div>
        </div>
      </div>
  )
};

RecruitmentCard.defaultProps = {
  imageSrc: defaultImg
}

export default RecruitmentCard;
