import admin from 'firebase-admin';
import { find } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import FullScreenLoading from '../../components/FullScreenLoading/FullScreenLoading';
import Watcher from './Watcher/Watcher';
import WatcherInfo from './WatcherInfo/WatcherInfo';

class WatchRoute extends React.Component {
  state = {
    loading: true,
    firestore: undefined
  };

  componentWillMount() {
    const { config } = this.props;
    admin.initializeApp({
      credential: admin.credential.cert(config.json),
      databaseURL: `https://${config.json.project_id}.firebaseio.com`
    });
    const firestore = admin.firestore();
    this.setState({ loading: false, firestore });
  }

  render() {
    const { firestore, loading } = this.state;
    const { config } = this.props;
    return (
      loading ?
        <FullScreenLoading /> :
        <Switch>
          <Route exact path="/watch/:id" render={() => <Watcher firestore={firestore} />} />
          <Route exact path="/watch/:id/info" render={() => <WatcherInfo firestore={firestore} config={config} />} />
        </Switch>
    );
  }
}

const mapStateToProps = (state, props) => ({
  config: find(state.configurations.firebaseConfigs, (firebaseConfig) => {
    console.log(firebaseConfig, props.match.params.id);
    const configId = props.match.params.id;
    return firebaseConfig.id === configId;
  })
});

export default compose(withRouter, connect(mapStateToProps))(WatchRoute);
