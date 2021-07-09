import './App.css';
import ProjectsServee from './Projects_Servee';
import PostProject from './PostProject';
import FindJob from './FindJob';
import FinancialDashboardServee from './FinancialDashboard_Servee';
import FinancialDashboardServer from './FinancialDashboard_Server';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/servee/projects' exact component={ProjectsServee}/>
        <Route path='/servee/postproject' exact component={PostProject}/>
        <Route path='/servee/financialdashboard' exact component={FinancialDashboardServee}/>
        <Route path='/server/financialdashboard' exact component={FinancialDashboardServer}/>
        <Route path='/findjobs' exact component={FindJob}/>
      </Switch>
    </Router>       
  );
}

export default App;
