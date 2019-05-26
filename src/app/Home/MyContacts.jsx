import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Contact from './components/Contact';

class MyContacts extends PureComponent {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <Contact>
            gutopicciani@gmail.com
          </Contact>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Contact>
            (44) 99960-6007
          </Contact>
        </Grid>
      </Grid>
    );
  }
}

export default MyContacts;
