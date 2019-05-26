import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import MyPicture from './MyPicture';
import MyContacts from './MyContacts';

class MyPresentation extends PureComponent {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4} lg={3}>
          <MyPicture/>
        </Grid>
        <Grid item xs={12} sm={8} lg={9}>
          <MyContacts/>
        </Grid>
      </Grid>
    );
  }
}

export default MyPresentation;
