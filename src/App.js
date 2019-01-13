import React, { lazy }from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import withLazyLoading from 'infrastructure/withLazyLoading';
import { ContextOneProvider } from 'context/ContextOne';
const AppraisalContainer = lazy(() => import('containers/AppraisalContainer'));
const SoundboardContainer = lazy(() => import('containers/SoundboardContainer'));
const HomepageContainer = lazy(() => import('containers/HomepageContainer'));
const ProfileContainer = lazy(() => import('containers/ProfileContainer'));
const SuccessContainer = lazy(() => import ('containers/SuccessContainer'));


const App = () => {
  return (
    <Router>
      <ContextOneProvider>
        <section>
          <Route exact path="/" component={withLazyLoading(HomepageContainer)} />
          <Route exact path="/staff" component={withLazyLoading(ProfileContainer)} />
          <Route exact path="/soundboard" component={withLazyLoading(SoundboardContainer)} />
          <Route exact path="/appraisal" component={withLazyLoading(AppraisalContainer)} />
          <Route exact path="/success" component={withLazyLoading(SuccessContainer)} />
        </section>
      </ContextOneProvider>
    </Router>
  );
}

export default App;
