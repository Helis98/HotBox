import { Route, Switch } from "react-router-dom";

import StatusPage from "./pages/StatusPage";
import OrderPage from "./pages/OrderPage";
import SystemPage from "./pages/SystemPage";
import NavBar from "./components/ui/NavBar";

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
        <Route path="/system">
          <SystemPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
