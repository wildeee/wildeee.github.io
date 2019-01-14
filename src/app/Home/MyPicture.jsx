import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';

const FACEBOOK_PICTURE_URL = 'https://graph.facebook.com/745080472278255/picture?type=large';

const style = {
  picture: {
    width: '100%',
  },
};

class MyPicture extends PureComponent {
  constructor() {
    super();
    this.state = {
      picture: '',
    };
  }

  componentDidMount() {
    fetch(FACEBOOK_PICTURE_URL).then((picture) => {
      this.setState({ picture: picture.url });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <img
        src={this.state.picture}
        alt="Este sou eu :)"
        className={classes.picture}
      />
    );
  }
}

export default withStyles(style)(MyPicture);
