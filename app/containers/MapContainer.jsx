import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Line from '../components/map/Line.jsx';
import Map from '../components/map/Map.jsx';
import Marker from '../components/map/Marker.jsx'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.aiportA !== this.props.airportA ||
          nextProps.aiportB !== this.props.airportB ||
          nextProps.map !== this.props.map
  }

  render() {
    return (
      <Map
        saveMap={this.props.saveMap}
        markerA={this.props.markerA}
        markerB={this.props.markerB}
        map={this.props.map}
      >
        <Marker
          map={this.props.map}
          airport={this.props.airportA}
          addMarker={this.props.addMarker}
          airId='airportA'
        />
        <Marker
          map={this.props.map}
          airport={this.props.airportB}
          addMarker={this.props.addMarker}
          airId='airportB'
        />
        <Line
          airportA={this.props.airportA}
          airportB={this.props.airportB}
          map={this.props.map}
        />
      </Map>
    );
  }
}

MapContainer.propTypes = {
  airportA: ImmutablePropTypes.map,
  airportB: ImmutablePropTypes.map,
  addMarker: PropTypes.func,
  markerA: PropTypes.any.isRequired,
  markerB: PropTypes.any.isRequired,
  saveMap: PropTypes.func,
  map: PropTypes.object
};
