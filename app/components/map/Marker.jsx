import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Marker extends React.Component {
  constructor(props) {
    super(props);
  }

  // when component receives new props check to see if should create a marker
  componentWillReceiveProps(nextProps) {
    if(nextProps.map && nextProps.airport.size && nextProps.airport !== this.props.airport) {
      const marker = createMapMarker(nextProps.airport, nextProps.map)
      this.props.addMarker(this.props.airId, marker)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.airport !== this.props.airport
  }

  render() {
    return <div />;
  }
}

Marker.propTypes = {
  airport: ImmutablePropTypes.map,
  map: PropTypes.any.isRequired
};


function createMapMarker(airport, map) {
  return new google.maps.Marker({
    position: {lat: airport.get('lat'), lng: airport.get('lng')},
    map: map,
    title: airport.get('name')
  })
}
