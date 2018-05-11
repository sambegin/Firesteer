import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { Typography } from 'material-ui';
import Button from 'material-ui/Button/Button';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import withStyles from 'material-ui/styles/withStyles';
import TextField from 'material-ui/TextField/TextField';
import React, { Fragment } from 'react';
import { compose } from 'redux';
import CenteredContainer from '../../../components/CenteredContainer/CenteredContainer';

const styles = () => ({
  container: {
    maxWidth: 600
  }
});

class WatcherInfo extends React.Component {
  state = {
    testSucceeded: false,
    loading: false,
    error: undefined
  };

  componentWillMount() {
    console.log('mounted');
  }

  handleFirebaseTest = () => {
    this.setState({ testSucceeded: false, error: undefined, loading: true });
    try {
      this.props.firestore.collection('/test').get()
        .then(() => this.setState({ testSucceeded: true, loading: false }))
        .catch((error) => this.setState({ error, loading: false }));
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    console.log(this.props);
    const { config, classes } = this.props;
    return (
      <CenteredContainer className={classes.container}>
        <TextField fullWidth label="Config Name" value={config.name} margin="normal" />
        <TextField fullWidth label="Project ID" value={config.json.project_id} margin="normal" />
        <Button onClick={this.handleFirebaseTest} style={{ marginBottom: 16 }}>
          {this.state.loading ? <CircularProgress size={24} /> : 'Test firebase config'}
        </Button>
        {this.state.testSucceeded &&
        <Fragment>
          <Typography>This connection to Firestore is awesome !</Typography>
          <CheckCircleIcon color="action" />
        </Fragment>}
        {this.state.error &&
        <Fragment>
          <Typography>This connection to Firestore is wrong :(</Typography>
          <Typography>{`Explanation : ${this.state.error}`}</Typography>
          <ErrorIcon color="error" />
        </Fragment>}
      </CenteredContainer>
    );
  }
}


export default compose(withStyles(styles))(WatcherInfo);
