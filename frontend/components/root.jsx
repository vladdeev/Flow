import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange300, deepOrange400, deepOrangeA400, lightRed200 } from 'material-ui/styles/colors';

import AppContainer from './app/app_container';
import SessionFormContainer from './session_form/session_form_container';
import DemoLoginContainer from './demo_login/demo_login_container';
import WorkspaceContainer from './workspace/workspace_container';
import ProjectShowContainer from './project/project_show_container';
import TaskIndexContainer from './task/task_index_container';
import TaskDetailContainer from './task/task-detail/task_detail_container';
import {
  fetchAllWorkspaces,
  fetchWorkspace,
  fetchInitialWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace
} from '../actions/workspace_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedInAndWorkspace = (ownProps) => {
    const curretState = store.getState();
    const currentUser = curretState.session.currentUser;
    const currentWorkspace = curretState.workspace.currentWorkspace;
    const workspacesListIds = Object.keys(curretState.workspace.workspacesList);
    const workspaceId = ownProps.params.workspaceId;
    const projectId = ownProps.params.projectId;
    const currentProject = curretState.project.currentProject;
    const projectsListIds = Object.keys(curretState.project.projectsList);

    if(!currentUser) {
      hashHistory.replace('/');
    } else {
      store.dispatch(fetchWorkspace(workspaceId));
    }
  };

 return (
    <MuiThemeProvider muiTheme={muiTheme}>
     <Provider store={ store }>
       <Router history={ hashHistory }>
         <Route path="/" component={ AppContainer }>
           <IndexRoute component={WorkspaceContainer}/>
           <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/demologin" component={DemoLoginContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/:workspaceId" component={WorkspaceContainer} onEnter={_ensureLoggedInAndWorkspace}>
            <Route path=':projectId' component={ProjectShowContainer}>
              <Route path='tasks' component={TaskIndexContainer}>
                <Route path=':taskId' component={TaskDetailContainer}/>
              </Route>
            </Route>
           </Route>
         </Route>
       </Router>
     </Provider>
    </MuiThemeProvider>
 );
};

const muiTheme = getMuiTheme({
  palette: {
  primary1Color: deepOrange300,
  primary2Color: deepOrange400,
},
  appBar: {
    height: 50,
  },
});

export default Root;
