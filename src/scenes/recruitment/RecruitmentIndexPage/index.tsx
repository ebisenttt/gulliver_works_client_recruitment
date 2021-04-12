import React, {useState} from "react";
import styles from "./style.module.scss";
// import { Link } from "react-router-dom";
import RecruitmentCard from "../../../components/RecruitmentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isTemplateExpression } from "typescript";

const RecruitmentIndexPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const cardsList = (list: Array<{title: string, companyName: string}>) => (
    list.map((item, index) => (
      <li key={index}>
        <RecruitmentCard
          title={item.title}
          companyName={item.companyName}
        />
      </li>
    ))
  );

  const settings = {
    className: "center",
    centerMode: true,
    variableWidth: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  };

  return (
    <>
      {!isLoggedIn &&
        <div className={styles.recommendations}>
          <h1>おすすめの募集</h1>
          <ul>
            <Slider {...settings}>
              {cardsList(recommendations)}
            </Slider>
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
