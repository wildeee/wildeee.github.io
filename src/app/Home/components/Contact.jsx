import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class Contact extends PureComponent {
  render() {
    return (
      <Grid container>
        <Grid item xs={2}>
          { this.props.icon }
        </Grid>
        <Grid item xs={10}>
          { this.props.children }
        </Grid>
      </Grid>
    );
  }
}

Contact.propTypes = {
  icon: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default Contact;
