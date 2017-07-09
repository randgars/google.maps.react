import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import MapComponent from './map/Map'

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="index">
        <MapComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
