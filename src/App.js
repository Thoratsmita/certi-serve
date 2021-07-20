import "./App.css";
import SelectAccount from "./SelectAccount";
import ProjectsServee from "./Projects_Servee";
import PostProject from "./PostProject";
import FindJob from "./FindJob";
import FinancialDashboardServee from "./FinancialDashboard_Servee";
import FinancialDashboardServer from "./FinancialDashboard_Server";
import ProjectsServer from "./Projects_Server";
import Portfolio from "./Portfolio";
import Inbox from "./Inbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePageServer from "./components/WelcomePageServer";
import WelcomePageServee from "./components/WelcomePageServee";
import Login from "./components/Login/Login";

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/selectaccount" exact component={SelectAccount}/>
        <Route path="/server" exact component={WelcomePageServer} />
        <Route path="/servee" exact component={WelcomePageServee} />
        <Route path="/login" exact component={Login} />
        <Route path="/servee/projects" exact component={ProjectsServee} />
        <Route path="/servee/postproject" exact component={PostProject} />
        <Route
          path="/servee/financialdashboard"
          exact
          component={FinancialDashboardServee}
        />
        <Route
          path="/server/financialdashboard"
          exact
          component={FinancialDashboardServer}
        />
        <Route path="/server/projects" exact component={ProjectsServer} />
        <Route path="/findjobs" exact component={FindJob} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/inbox" exact component={Inbox} />
      </Switch>
    </Router>
  );
}

export default App;
