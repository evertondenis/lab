import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Brand } from 'components';
import { GlobalStyle } from 'core/assets/style/global';
import logo from 'core/assets/images/logo.svg';
import { AppHeader, AppContainer } from './styled';
import { Colors, Animations, Spacings } from 'sds-design-token';

class App extends PureComponent {
  render() {
    //eslint-disable-next-line
    console.log(Colors);
    //eslint-disable-next-line
    console.log(Animations);
    //eslint-disable-next-line
    console.log(Spacings);
    return (
      <Fragment>
        <AppContainer>
          <AppHeader>
            <Brand brandImage={logo} />
            <p>Initial project structure</p>
            <Link to="/customers">Customers Page</Link>
            <Link to="/jokes">Jokes</Link>
          </AppHeader>
        </AppContainer>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
