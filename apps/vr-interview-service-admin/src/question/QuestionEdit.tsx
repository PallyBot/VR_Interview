import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InterviewTitle } from "../interview/InterviewTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput
          source="interview.id"
          reference="Interview"
          label="Interview"
        >
          <SelectInput optionText={InterviewTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
