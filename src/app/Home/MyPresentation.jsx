import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import MyPicture from './MyPicture';

class MyPresentation extends PureComponent {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4} lg={3}>
          <MyPicture/>
        </Grid>
        <Grid item xs={12} sm={8} lg={9}>
          Meus contatos virão aqui. Ainda está em desenvolvimento, então <strong>aguarde</strong> :)
        </Grid>
      </Grid>
    );
  }
}

export default MyPresentation;
