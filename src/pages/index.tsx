import React, {Suspense, lazy} from 'react';

import { BrowserRouter as Router, Route,  Switch, Redirect } from 'react-router-dom'

const Products = lazy(() => import('./Products'));

const Main: React.FC<{}> = () => {
  return(
    <Router>
      <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      </Suspense>
    </Router>
  )
}

export default Main;