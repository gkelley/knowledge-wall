import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import KioskHome from "./pages/Kiosk/KioskHome/KioskHome";
import KnowledgeWall from "./pages/Dashboard/KnowledgeWall/KnowledgeWall";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={KnowledgeWall} />
          <Route path="/kiosk" component={KioskHome} />
          <Redirect path="/" exact to="/dashboard" />
          <Route render={() => <h1>404: Page Not Found</h1>} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
