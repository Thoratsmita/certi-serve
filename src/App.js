import './App.css';
import ProjectsServee from './Projects_Servee';
import PostProject from './PostProject';
import FindJob from './FindJob';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/servee/projects' exact component={ProjectsServee}/>
        <Route path='/servee/postproject' exact component={PostProject}/>
        <Route path='/findjobs' exact component={FindJob}/>
      </Switch>
    </Router>       
  );
}

export default App;
