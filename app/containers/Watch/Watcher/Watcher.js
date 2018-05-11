import { map } from 'lodash';
/* eslint-disable no-eval */
import withStyles from 'material-ui/styles/withStyles';
import React from 'react';
import CenteredContainer from '../../../components/CenteredContainer/CenteredContainer';
import Querier from '../../../components/Querier/Querier';
import Resulter from '../../../components/Results/Results';

const styles = () => ({
  root: {}
});

class Watcher extends React.Component {
  state = {
    docs: undefined
  };

  handleQuery = (query) => {
    this.setState({ docs: undefined });
    const { firestore } = this.props;
    try {
      const evalQuery = eval(query);
      evalQuery.get().then((results) => {
        console.log(results);
        this.setState({ docs: map(results.docs, (doc) => Object.assign({}, doc.data(), { id: doc.id })) });
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { docs } = this.state;
    const { classes } = this.props;
    return (
      <CenteredContainer className={classes.root}>
        <Querier onQuery={this.handleQuery} />
        <Resulter docs={docs} />
      </CenteredContainer>
    );
  }
}

export default withStyles(styles)(Watcher);
