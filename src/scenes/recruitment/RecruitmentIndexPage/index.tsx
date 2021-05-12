import React, {useState} from "react";
import styles from "./style.module.scss";
// import { Link } from "react-router-dom";
import RecruitmentCard from "../../../components/RecruitmentCard";
import Carousel from "../../../components/Carousel";

import { isTemplateExpression } from "typescript";
import { useCurrentAccount } from "../../../data/hooks/useCurrentAccount";

const RecruitmentIndexPage = () => {
  const [recommendations, setRecommnedations] = useState([
    {title: "おすすめ1", companyName: "会社1"},
    {title: "おすすめ2", companyName: "会社2"},
    {title: "おすすめ3", companyName: "会社3"},
    {title: "おすすめ4", companyName: "会社4"},
    {title: "おすすめ5", companyName: "会社5"},
    {title: "おすすめ6", companyName: "会社6"}
  ]);

  const [all, setAll] = useState([
    {title: "ぼしゅう1", companyName: "会社1"},
    {title: "ぼしゅう2", companyName: "会社2"},
    {title: "ぼしゅう3", companyName: "会社3"},
    {title: "ぼしゅう4", companyName: "会社4"}
  ]);

  const {account} = useCurrentAccount();

  type RecruitmentCardProps = React.ComponentProps<typeof RecruitmentCard>;

  const cardsList = (list: Array<RecruitmentCardProps>) => (
    list.map((item, index) => (
      <li key={index}>
        <div className={styles.wrapper}>
          <RecruitmentCard
            title={item.title}
            companyName={item.companyName}
          />
        </div>
      </li>
    ))
  );

  return (
    <>
      {account &&
        <div className={styles.recommendations}>
          <h1>おすすめの募集</h1>
          <ul>
            <Carousel
              children={cardsList(recommendations)}
            />
          </ul>
        </div>
      }
      <div className={styles.all}>
        <h1>すべての募集</h1>
        <ul>
          {cardsList(all)}
        </ul>
      </div>
    </>
  );
};

export default RecruitmentIndexPage;
