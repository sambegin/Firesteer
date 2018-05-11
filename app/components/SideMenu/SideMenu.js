import ComputerIcon from '@material-ui/icons/Computer';
import Button from 'material-ui/Button/Button';
import Divider from 'material-ui/Divider/Divider';
import Drawer from 'material-ui/Drawer/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import ConfigurationDialog from '../../containers/ConfigurationDialog/ConfigurationDialog';

export const sideNavigationWidth = 240;

const styles = () => ({
  docked: {
    position: 'fixed',
    height: '100%',
    width: sideNavigationWidth,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
    overflowY: 'auto'
  },
  paper: {
    display: 'block',
    height: '100%',
    position: 'relative'
  },
  drawerHeader: {
    width: '100%',
    minHeight: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerList: {
    padding: 0
  }
});

class SideNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configDialogOpen: false
    };
  }

  render() {
    const { classes, configs, changeView } = this.props;

    return (
      <Drawer
        variant="permanent"
        open
        classes={{
          docked: classes.docked,
          paper: classes.paper

        }}
      >
        <div id="side-navigation">
          <Button className={classes.drawerHeader} onClick={() => this.props.goHome()}>
            <Typography variant="title">Firestare</Typography>
          </Button>
          <Divider />
          <List className={classes.drawerList}>
            <ListItem
              button
              id="add-configuration"
              onClick={() => {
                this.setState({ configDialogOpen: true });
              }}
            >
              <ListItemIcon className={classes.icon}>
                <ComputerIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography>Configurations</Typography>} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {configs.map((config) => (
              <ListItem button key={config.id} onClick={() => changeView(config.id)}>
                <ListItemIcon className={classes.icon}>
                  <Typography variant="caption">FB Icon</Typography>
                </ListItemIcon>
                <ListItemText
                  primary={<Typography>{config.name}</Typography>}
                  classes={{ primary: classes.text }}
                />
              </ListItem>
            ))}
          </List>
          <ConfigurationDialog open={this.state.configDialogOpen} onClose={() => this.setState({ configDialogOpen: false })} />
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => ({
  configs: state.configurations.firebaseConfigs
});

const mapDispatchToProps = {
  changeView: (configId) => push(`/watch/${configId}`),
  goHome: () => push('/')
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SideNavigation);
