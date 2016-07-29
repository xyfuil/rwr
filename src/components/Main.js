require('normalize.css/normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>test</div>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default AppComponent;
