import { Route, Switch } from "react-router-dom";

import StatusPage from "./pages/StatusPage";
import OrderPage from "./pages/OrderPage";
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
      </Switch>
    </div>
  );
}

export default App;
