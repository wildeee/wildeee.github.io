import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

class MainTheme extends PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        { this.props.children }
      </MuiThemeProvider>
    );
  }
}

MainTheme.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainTheme;
