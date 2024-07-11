import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InterviewTitle } from "../interview/InterviewTitle";

export const ResumeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
