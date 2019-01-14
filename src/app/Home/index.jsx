import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import BasePage from '../../components/BasePage';
import MyPresentation from './MyPresentation';
import WelcomeText from './WelcomeText';

class Home extends PureComponent {
  render() {
    return (
      <BasePage>
        <Grid container>
          <Grid item xs={12}>
            <MyPresentation/>
          </Grid>
          <Grid item xs={12}>
            <WelcomeText/>
          </Grid>
        </Grid>
      </BasePage>
    );
  }
}

export default Home;
