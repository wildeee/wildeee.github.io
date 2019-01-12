import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';

const styles = (theme) => ({
  currentMenuName: {
    margin: '0 auto',
  },
  menuButton: {
    position: 'absolute',
    left: 12,
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary[800],
  },
});

class Bar extends PureComponent {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  setMenuOpen = isOpen => () => {
    this.setState({ menuOpen: isOpen });
  };

  onRouteChange = route => {
    this.setState({ menuOpen: false });
    this.props.onRouteChange(route);
  };
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" classes={{colorPrimary: classes.colorPrimary}}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={this.setMenuOpen(true)}>
            <MenuIcon/>
          </IconButton>
          <Typography
            className={classes.currentMenuName}
            variant="h5"
          >
            { this.props.title }
          </Typography>
        </Toolbar>
        <Menu
          open={this.state.menuOpen}
          onClose={this.setMenuOpen(false)}
          onRouteChange={this.onRouteChange}
        />
      </AppBar>
    );
  }
}

Bar.propTypes = {
  title: PropTypes.string.isRequired,
  onRouteChange: PropTypes.func,
};

export default withStyles(styles)(Bar);
