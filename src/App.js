import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SelectAccount from './SelectAccount';
import ProjectsServee from './Projects_Servee';
import PostProject from './PostProject';
import FindJob from './FindJob';
import FinancialDashboardServee from './FinancialDashboard_Servee';
import FinancialDashboardServer from './FinancialDashboard_Server';
import ProjectsServer from './Projects_Server';
import Portfolio from './Portfolio';
import Inbox from './Inbox';
import WelcomePage from './components/Welcome/WelcomePage';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Approval from './components/Approval/Approval';
import Premium from './components/Premium/Premium';
import serveeFeedback from './components/Feedback/ServeeFeedback/ServeeFeedback';
import serverFeedback from './components/Feedback/ServerFeedback/ServerFeedback';
import Proposals from './components/Proposal/Proposals';
import CreateProposal from './components/Proposal/CreateProposal';
import ProfileOne from './components/profile/ProfileOne';
import ProfileTwo from './components/profile/ProfileTwo';
import ProfileThree from './components/profile/ProfileThree';
import ProfileFour from './components/profile/ProfileFour';
import Milestone from './Milestone';
import PortfolioServee from './PortfolioServee';

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/selectaccount" exact component={SelectAccount} />
        <Route path="/" exact component={WelcomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/approval" exact component={Approval} />
        <Route path="/premium" exact component={Premium} />
        <Route path="/signup" exact component={Signup} />
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
        <Route path="/servee/feedback" exact component={serveeFeedback} />
        <Route path="/server/feedback" exact component={serverFeedback} />
        <Route path="/server/projects" exact component={ProjectsServer} />
        <Route path="/findjobs" exact component={FindJob} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/proposals" exact component={Proposals} />
        <Route path="/proposals/create" exact component={CreateProposal} />
        <Route path="/profile/one" exact component={ProfileOne} />
        <Route path="/profile/two" exact component={ProfileTwo} />
        <Route path="/profile/three" exact component={ProfileThree} />
        <Route path="/profile/four" exact component={ProfileFour} />
        <Route path="/milestone" exact component={Milestone} />
        <Route path="/portfolio/servee" exact component={PortfolioServee} />
      </Switch>
    </Router>
  );
}

export default App;
