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

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CandidateName" source="candidateName" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Summary" multiline source="summary" />
        <TextInput label="Skills" multiline source="skills" />
        <div />
        <div />
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
