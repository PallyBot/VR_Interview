import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InterviewTitle } from "../interview/InterviewTitle";

export const JobApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Requirements" multiline source="requirements" />
        <TextInput label="Location" source="location" />
        <TextInput label="JobTitle" source="jobTitle" />
        <TextInput label="Company" source="company" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="interviews"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
