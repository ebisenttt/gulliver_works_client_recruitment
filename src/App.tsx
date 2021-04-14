import React, { FC } from "react";
import "./App.scss";
import "./assets/styles/global.scss"
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import RecruitmentCard from "./components/RecruitmentCard";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/card">
        <RecruitmentCard title="募集タイトル" companyName="会社名" />
      </Route>
      <Route path="/sign_in" component={SignInPage} />
    </div>
  </BrowserRouter>
);

export default App;