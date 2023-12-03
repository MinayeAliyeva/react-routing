import "./App.css";
import { useRoutes } from "react-router";
import routes from "./Routes";
function App() {
  return useRoutes(routes);
}

export default App;
