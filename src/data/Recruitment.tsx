import axios from 'axios';
import RecruitmentCard from "../components/RecruitmentCard";

type ParamsProps = "recommend" | "all";
type RecruitmentCardProps = React.ComponentProps<typeof RecruitmentCard>;

const recruitmentList = async (param: ParamsProps): Promise<RecruitmentCardProps[]> => {
  let url = "https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/recruitments";
  if(param == "recommend")url += "/recommended";
  const recruitments = axios.get(url).then(res => {
    const data: {title: string, company: {name: string}}[] = res.data;
    const array: {title: string, companyName: string}[] = data.map(e => {
      return {title: e.title, companyName: e.company.name};
    });
    return array;
  });
  return recruitments;
}

export default recruitmentList;