import React from 'react';
import './map.scss';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.initialize = this.initialize.bind(this);
  }

  initialize() {
    const mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(41.850033, -87.6500523)
    }

    this.map = new google.maps.Map(this.map, mapOptions)
  }
  componentDidMount() {
    this.initialize();
  }
  render() {
    return (
      <div ref={ref => (this.map = ref)} className="map-component">
      </div>
    );
  }
}

MapComponent.displayName = 'Map';
MapComponent.propTypes = {};
MapComponent.defaultProps = {};

export default MapComponent;
