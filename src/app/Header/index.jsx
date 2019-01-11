import React, { PureComponent } from 'react';
import Bar from './Bar';
import menuNamer from './menuNamer';

class Header extends PureComponent {

  onRouteChange = route => {
    if (route !== this.props.location.pathname) {
      this.props.history.push(route);
    }
  };

  render() {
    const menuTitle = menuNamer(this.props.location.pathname);
    return (
      <Bar
        title={menuTitle}
        onRouteChange={this.onRouteChange}
      />
    );
  }
}

export default Header;
