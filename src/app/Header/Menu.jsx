import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const style = {
  menuList: {
    minWidth: 150,
  },
};

class Menu extends PureComponent {

  setRoute = route => () => {
    this.props.onRouteChange(route);
  };

  render() {
    const { classes } = this.props;
    return (
      <Drawer open={this.props.open} onClose={this.props.onClose}>
        <List className={classes.menuList}>
          <ListItem button onClick={this.setRoute('/')}>
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem button onClick={this.setRoute('/about')}>
            <ListItemText primary="Sobre"/>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onRouteChange: PropTypes.func,
};

export default withStyles(style)(Menu);