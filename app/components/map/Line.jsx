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
    if(nextProps.placeA.size && nextProps.placeB.size) {
      this.createGooglePolyLine(nextProps.placeA, nextProps.placeB, this.props.map)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.placeA !== this.props.placeA ||
          nextProps.placeB !== this.props.placeB
  }

  // draw a Google Polyline between the two places on the given map
  createGooglePolyLine(placeA, placeB, map) {
    const linePoints=[
      {lat: placeA.get('lat'), lng: placeA.get('lng')},
      {lat: placeB.get('lat'), lng: placeB.get('lng')}
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
  places: ImmutablePropTypes.list,
  map: PropTypes.any.isRequired
};
