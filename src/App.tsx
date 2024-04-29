import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate, PostShow } from "./posts/Posts";
import { CommentList, CommentEdit, CommentCreate } from "./comments/Comments";

const jsonServerUrl =
  process.env.VITE_JSON_SERVER_URL || "https://jsonplaceholder.typicode.com";

const dataProvider = jsonServerProvider(jsonServerUrl);

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
    <Resource
      name="comments"
      list={CommentList}
      edit={CommentEdit}
      create={CommentCreate}
    />
  </Admin>
);

export default App;
