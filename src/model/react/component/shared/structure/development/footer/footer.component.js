import React from 'react';

import GenericFooter from '../../generic/footer/footer.component';
import './footer.component.css';

export default class Footer extends React.Component {
  render() {
    return <GenericFooter>
      {this.props.children}
    </GenericFooter>;
  }
};