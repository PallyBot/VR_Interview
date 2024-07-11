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

import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";
import { JOBAPPLICATION_TITLE_FIELD } from "./JobApplicationTitle";

export const JobApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Requirements" source="requirements" />
        <TextField label="Location" source="location" />
        <TextField label="JobTitle" source="jobTitle" />
        <TextField label="Company" source="company" />
        <TextField label="Description" source="description" />
        <ReferenceManyField
          reference="Interview"
          target="jobApplicationId"
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
