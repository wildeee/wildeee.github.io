import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
    text: {
      secondary: '#000000',
    },
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
