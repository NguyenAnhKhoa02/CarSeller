import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App () {
    return (
        <Admin basename="/admin" dataProvider={dataProvider}>
          <Resource name="posts" list={ListGuesser} />
          <Resource name="comments" list={ListGuesser} />
          <Resource name="users" list={ListGuesser} />
        </Admin>
      );
} 

export default App;
