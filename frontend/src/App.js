import { Route, Switch } from "react-router-dom";

import StatusPage from "./pages/StatusPage";
import OrderPage from "./pages/OrderPage";
import ServerPage from "./pages/ServerPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <StatusPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/server">
          <ServerPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
