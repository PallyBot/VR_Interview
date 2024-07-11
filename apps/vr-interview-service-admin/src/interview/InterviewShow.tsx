import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INTERVIEW_TITLE_FIELD } from "./InterviewTitle";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";
import { JOBAPPLICATION_TITLE_FIELD } from "../jobApplication/JobApplicationTitle";

export const InterviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="InterviewDate" source="interviewDate" />
        <ReferenceField label="Resume" source="resume.id" reference="Resume">
          <TextField source={RESUME_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="JobApplication"
          source="jobapplication.id"
          reference="JobApplication"
        >
          <TextField source={JOBAPPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Question"
          target="interviewId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Content" source="content" />
            <ReferenceField
              label="Interview"
              source="interview.id"
              reference="Interview"
            >
              <TextField source={INTERVIEW_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
