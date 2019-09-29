import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Mensalidades = React.lazy(() =>
  import(/* webpackChunkName: "viwes-Mensalidades" */ './mensalidades'),
);
// const SecondMenu = React.lazy(() =>
//   import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
// );
const Contato = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './contato')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/mensalidades`} />
              <Route
                path={`${match.url}/mensalidades`}
                render={props => <Mensalidades {...props} />}
              />
              {/* <Route
                path={`${match.url}/second-menu`}
                render={props => <SecondMenu {...props} />}
              /> */}
              <Route
                path={`${match.url}/contato`}
                render={props => <Contato {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
