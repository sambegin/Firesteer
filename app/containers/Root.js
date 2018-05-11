import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

export default class Root extends Component {
  render() {
    const theme = createMuiTheme();
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={this.props.persistor}>
          <ConnectedRouter history={this.props.history}>
            <MuiThemeProvider theme={theme}>
              <App />
            </MuiThemeProvider>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
