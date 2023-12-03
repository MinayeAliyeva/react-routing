import "./App.css";
import { generatePath, useRoutes } from "react-router";
import { url } from "./utils";
import routes from "./Routes";
function App() {
  url('home.blog.catagories',{
    id:3,
    url:'test-adana'
  })
  console.log(generatePath('post/:id/:url',{id:3,url:'test-url'}));
  return useRoutes(routes);
}
export default App;
