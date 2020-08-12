import React from 'react';
import {Router, Route, Switch, Redirect} from 'dva/router';
import LayoutView from './LayoutView';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LayoutView}/>
        {/*<Redirect to="/" from="/" />*/}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
