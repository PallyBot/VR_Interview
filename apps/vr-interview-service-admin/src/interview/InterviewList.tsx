import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";
import { JOBAPPLICATION_TITLE_FIELD } from "../jobApplication/JobApplicationTitle";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
