import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ResumeTitle } from "../resume/ResumeTitle";
import { JobApplicationTitle } from "../jobApplication/JobApplicationTitle";
import { QuestionTitle } from "../question/QuestionTitle";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="InterviewDate" source="interviewDate" />
        <ReferenceInput source="resume.id" reference="Resume" label="Resume">
          <SelectInput optionText={ResumeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobApplication.id"
          reference="JobApplication"
          label="JobApplication"
        >
          <SelectInput optionText={JobApplicationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
