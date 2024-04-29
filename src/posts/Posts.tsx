import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ListProps,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  CreateProps,
  ShowProps,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  Button,
} from "react-admin";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  userId: number;
}

//PostList
export const PostList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <Button component={Link} to="/posts/:id/show">
        <span>View</span>
      </Button>
    </Datagrid>
  </List>
);

//PostEdit
export const PostEdit: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="title" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceManyField
          label="Comments"
          reference="comments"
          target="postId"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </SimpleForm>
    </Edit>
  );
};
// PostCreate
export const PostCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <Button
        component={Link}
        to="/comments/create"
        label="Add a new comment"
        variant="contained"
        color="primary"
      />
    </SimpleForm>
  </Create>
);

export const PostShow: React.FC<ShowProps> = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <Button
        component={Link}
        to={`/comments/create?post_id=${props.id}`}
        label="Create a new comment"
        variant="contained"
        color="primary"
      />
    </SimpleShowLayout>
  </Show>
);
