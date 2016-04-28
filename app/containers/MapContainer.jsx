import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { List } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes';
import Line from '../components/map/Line.jsx';
import Map from '../components/map/Map.jsx';
import Marker from '../components/map/Marker.jsx'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {markers: List()}
    this.generateMarkers = this.generateMarkers.bind(this);
  }

  generateMarkers(places) {
    const markers = places.map((item,i) => {
      return (<Marker
                map={this.props.map}
                place={item}
                addMarker={this.props.addMarker}
                id={i}
              />)
    })
    this.setState()
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.places !== this.props.places ||
          nextProps.map !== this.props.map
  }

  render() {
    return (
      <Map
        saveMap={this.props.saveMap}
        markers={this.props.markers}
        map={this.props.map}
      >
        {this.state.markers}
        <Line
          places={this.props.places}
          map={this.props.map}
        />
      </Map>
    );
  }
}

MapContainer.propTypes = {
  places: ImmutablePropTypes.list,
  addMarker: PropTypes.func,
  markers: ImmutablePropTypes.list,
  saveMap: PropTypes.func,
  map: PropTypes.object
};
