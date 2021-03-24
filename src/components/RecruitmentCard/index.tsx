import React from "react";
import styles from "./style.module.scss";

type Props = {
  imageSrc: string;
  title: string;
  companyAvatarSrc: string;
  companyName: string;
}

const RecruitmentCard: React.FC<Props> = (props) => {
  const {
    imageSrc,
    title,
    companyAvatarSrc,
    companyName
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={imageSrc}/>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.company}>
          <img className={styles.companyAvatar} src={companyAvatarSrc} />
          <p className={styles.companyName}>{companyName}</p>
        </div>
      </div>
    </div>
  )
};

export default RecruitmentCard;
