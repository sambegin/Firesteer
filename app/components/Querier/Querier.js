import CheckCircleIcon from '@material-ui/icons/Info';
/* eslint-disable no-eval */
import Button from 'material-ui/Button/Button';
import IconButton from 'material-ui/IconButton/IconButton';
import withStyles from 'material-ui/styles/withStyles';
import TextField from 'material-ui/TextField/TextField';
import Typography from 'material-ui/Typography/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { compose } from 'redux';


const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: '0 0 auto'
  },
  input: {
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  },
  errorBox: {}
});

class Querier extends React.Component {
  state = {
    error: undefined
  };

  handleClick = () => {
    this.setState({ error: undefined });
    const query = this.inputRef.value;

    try {
      eval(query);
    } catch (error) {
      if (error instanceof SyntaxError) {
        this.setState({ error });
      } else {
        this.props.onQuery(query);
      }
    }
  };

  render() {
    const { classes, getCurrentConnectionInfo, match } = this.props;
    const { error } = this.state;
    return (
      <div className={classes.container}>
        {error &&
        <div className={classes.errorBox}>
          <Typography>{error.toString()}</Typography>
        </div>}
        <div className={classes.input}>
          <TextField
            fullWidth
            label="Javascript Query"
            multiline
            rowsMax="4"
            defaultValue="firestore.collection('/users')"
            margin="normal"
            className={classes.textBox}
            inputRef={(inputRef) => {
              this.inputRef = inputRef;
            }}
          />
          <Button onClick={this.handleClick}>Get</Button>
          <IconButton onClick={() => getCurrentConnectionInfo(match)}>
            <CheckCircleIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentConnectionInfo: (match) => push(`/watch/${match.params.id}/info`)
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(null, mapDispatchToProps)
)(Querier);
