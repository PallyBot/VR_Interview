import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"JobApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Requirements" source="requirements" />
        <TextField label="Location" source="location" />
        <TextField label="JobTitle" source="jobTitle" />
        <TextField label="Company" source="company" />
        <TextField label="Description" source="description" />
      </Datagrid>
    </List>
  );
};
