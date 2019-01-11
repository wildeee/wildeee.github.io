import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const style = (theme) => ({
  container: {
    minHeight: 'calc(100vh - 76px)',
    backgroundColor: theme.palette.grey[300],
    padding: 10,
    '@media (min-width: 600px)': {
      minHeight: 'calc(100vh - 84px)',
    },
    '@media (min-width: 960px)': {
      minHeight: 'calc(100vh - 89px)',
      marginTop: 5,
    },
  },
});

class BasePage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid
          item
          xs={this.props.xs || 12}
          sm={this.props.sm || 12}
          md={this.props.md || 10}
          lg={this.props.lg || 8}
          xl={this.props.xl || 7}
        >
          <Paper className={classes.container}>
            { this.props.children }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

BasePage.propTypes = {
  children: PropTypes.any,
};

export default withStyles(style)(BasePage);
