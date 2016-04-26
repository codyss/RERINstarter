import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {line: ''}
    this.createGooglePolyLine = this.createGooglePolyLine.bind(this)
  }

  // when component receives new props check to see if should draw a line
  componentWillReceiveProps(nextProps) {
    if(this.state.line) this.state.line.setMap(null);
    if(nextProps.airportA.size && nextProps.airportB.size) {
      this.createGooglePolyLine(nextProps.airportA, nextProps.airportB, this.props.map)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.airportA !== this.props.airportA ||
          nextProps.airportB !== this.props.airportB
  }

  // draw a Google Polyline between the two airports on the given map
  createGooglePolyLine(airportA, airportB, map) {
    const linePoints=[
      {lat: airportA.get('lat'), lng: airportA.get('lng')},
      {lat: airportB.get('lat'), lng: airportB.get('lng')}
    ]
    const linePath = new google.maps.Polyline({
      path: linePoints,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    })
    this.setState({line:linePath})
    linePath.setMap(map)
  }

  render() {
    return (<div />);
  }
}

Line.propTypes = {
  airportA: ImmutablePropTypes.map,
  airportB: ImmutablePropTypes.map,
  map: PropTypes.any.isRequired
};
