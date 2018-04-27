import React, { Component } from 'react';
import {Button,Icon} from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <div>
        <Button>Click here</Button>
        <Icon loading name='spinner'/>
      </div>
    );
  }
}

export default Header;