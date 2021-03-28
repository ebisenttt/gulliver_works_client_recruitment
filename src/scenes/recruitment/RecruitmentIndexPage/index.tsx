import React, {useState} from "react";
import styles from "./style.module.scss";
// import { Link } from "react-router-dom";
import RecruitmentCard from "../../../components/RecruitmentCard"

const RecruitmentIndexPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recommendations, setRecommnedations] = useState([
    {title: "おすすめ1", companyName: "会社1"},
    {title: "おすすめ2", companyName: "会社2"},
    {title: "おすすめ3", companyName: "会社3"},
    {title: "おすすめ4", companyName: "会社4"}
  ]);

  const [all, setAll] = useState([
    {title: "ぼしゅう1", companyName: "会社1"},
    {title: "ぼしゅう2", companyName: "会社2"},
    {title: "ぼしゅう3", companyName: "会社3"},
    {title: "ぼしゅう4", companyName: "会社4"}
  ]);

  const cardsList = (list: Array<{title: string, companyName: string}>) => {
    const listItems = list.map( (element, index) => {
      return <li key={index}>
        <RecruitmentCard
          title={element.title}
          companyName={element.companyName}
        />
      </li>
    });
    return(
      <ul>
        {listItems}
      </ul>
    );
  }

  return (
    <>
      {!isLoggedIn &&
        <div className={styles.recommendations}>
          <h1>おすすめの募集</h1>
          {cardsList(recommendations)}
        </div>
      }
      <div className={styles.all}>
        <h1>すべての募集</h1>
        {cardsList(all)}
      </div>
    </>
  );
};

export default RecruitmentIndexPage;
