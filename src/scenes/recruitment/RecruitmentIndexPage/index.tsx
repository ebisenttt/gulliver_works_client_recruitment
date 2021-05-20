import React, {useState, useEffect} from "react";
import styles from "./style.module.scss";
import RecruitmentCard from "../../../components/RecruitmentCard";
import Carousel from "../../../components/Carousel";
import axios from "axios";
import { useCurrentAccount } from "../../../data/hooks/useCurrentAccount";

const RecruitmentIndexPage = () => {
  type RecruitmentCardProps = React.ComponentProps<typeof RecruitmentCard>;
  const [recommendations, setRecommnedations] = useState<RecruitmentCardProps[]>([]);
  const [all, setAll] = useState<RecruitmentCardProps[]>([]);

  const baseUrl: string = "https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/recruitments";
  const recommendedUrl: string = baseUrl + "/recommended";
  useEffect(() => {
    type Props = {
      title: string,
      company: {
        name: string
      }
    }
    axios.get(baseUrl).then(res => {
      const data: {recruitments: Props[]} = res.data;
      const recruitments = data.recruitments;
      const array = recruitments.map(r => (
        {title: r.title, companyName: r.company.name}
      ));
      setAll(array);
    });
    axios.get(recommendedUrl).then(res => {
      const data: Props[] = res.data;
      const array = data.map(r => (
        {title: r.title, companyName: r.company.name}
      ));
      setRecommnedations(array);
    })
  }, []);

  const {account} = useCurrentAccount();

  const cardsList = (list: RecruitmentCardProps[]) => (
    list.map((item, index: number) => (
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
      {!account &&
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
