import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { JobApplicationList } from "./jobApplication/JobApplicationList";
import { JobApplicationCreate } from "./jobApplication/JobApplicationCreate";
import { JobApplicationEdit } from "./jobApplication/JobApplicationEdit";
import { JobApplicationShow } from "./jobApplication/JobApplicationShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VRInterviewService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="JobApplication"
          list={JobApplicationList}
          edit={JobApplicationEdit}
          create={JobApplicationCreate}
          show={JobApplicationShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
