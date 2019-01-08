import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  currentMenuName: {
    margin: '0 auto',
  },
  menuButton: {
    position: 'absolute',
    left: 12,
  },
};

class Bar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography
            className={classes.currentMenuName}
            variant="h5"
          >
            Bem vindo!!!
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Bar);
