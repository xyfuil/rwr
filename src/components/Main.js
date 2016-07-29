require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Provider } from 'react-redux';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <img src={yeomanImage} alt="image"/>
          <div>test</div>
        </div>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

AppComponent.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

export default AppComponent;
