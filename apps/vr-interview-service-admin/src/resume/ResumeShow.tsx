import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESUME_TITLE_FIELD } from "./ResumeTitle";
import { JOBAPPLICATION_TITLE_FIELD } from "../jobApplication/JobApplicationTitle";

export const ResumeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="CandidateName" source="candidateName" />
        <TextField label="Email" source="email" />
        <TextField label="Phone" source="phone" />
        <TextField label="Summary" source="summary" />
        <TextField label="Skills" source="skills" />
        <TextField label="Experience" source="experience" />
        <TextField label="Education" source="education" />
        <ReferenceManyField
          reference="Interview"
          target="resumeId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="InterviewDate" source="interviewDate" />
            <ReferenceField
              label="Resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="JobApplication"
              source="jobapplication.id"
              reference="JobApplication"
            >
              <TextField source={JOBAPPLICATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
