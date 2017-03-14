import React from 'react';

import Header from '../../../shared/structure/user/header/header.component';
import Main from '../../../shared/structure/user/main/main.component';
import Footer from '../../../shared/structure/user/footer/footer.component';

export class SettingsContainer extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Main>
        <h1>Settings - User</h1>
      </Main>
      <Footer></Footer>
    </div>;
  }
};
