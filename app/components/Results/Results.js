import List from 'material-ui/List/List';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';
import Document from '../Document/Document';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    overflow: 'auto'
  },
  list: {
    width: '100%'
  }
});

class Results extends React.Component {
  render() {
    const { docs, classes } = this.props;
    return (
      <div className={classes.container}>
        <List className={classes.list}>
          {docs.map((doc) => <Document key={doc.id} doc={doc} />)}
        </List>
      </div>
    );
  }
}

Results.propTypes = {
  docs: PropTypes.array
};

Results.defaultProps = {
  docs: []
};

export default withStyles(styles)(Results);
