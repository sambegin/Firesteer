import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from 'material-ui/Button/Button';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import Input from 'material-ui/Input/Input';
import withStyles from 'material-ui/styles/withStyles';
import TextField from 'material-ui/TextField/TextField';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CenteredContainer from '../../components/CenteredContainer/CenteredContainer';
import { saveConfig } from './actions';

const styles = (theme) => ({
  configButtonContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.unit
  }
});

class ConfigurationDialog extends React.Component {
  state = {
    uploadedConfig: undefined
  };

  handleFileInputChange = () => {
    const jsonFile = this.fileInput.files[0];
    if (jsonFile) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        this.setState({ uploadedConfig: JSON.parse(event.target.result) });
      };
      fileReader.readAsText(jsonFile);
    }
  };

  render() {
    const { open, onClose, onSaveConfig, classes } = this.props;

    return (
      <Dialog
        open={open}
        fullWidth
      >
        <DialogTitle>Firebase configs</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={(inputRef) => {
              this.configNameInput = inputRef;
            }}
            fullWidth
            label="Config name"
          />
          <div>
            <Input
              id="raised-button-file"
              inputProps={{
                accept: 'application/json',
                type: 'file'
              }}
              onChange={this.handleFileInputChange}
              inputRef={(input) => {
                this.fileInput = input;
              }}
              style={{ display: 'none' }}
            />
            <CenteredContainer className={classes.configButtonContainer}>
              <Button onClick={() => this.fileInput.click()}>Upload Admin Config JSON</Button>
              {this.state.uploadedConfig && <CheckCircleIcon />}
            </CenteredContainer>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => {
            onSaveConfig({
              name: this.configNameInput.value,
              json: this.state.uploadedConfig
            });
            this.setState({ uploadedConfig: undefined });
            onClose();
          }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapDispatchToProps = {
  onSaveConfig: saveConfig
};

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(ConfigurationDialog);
