import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from '../../styles/main.css';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.saveMap(
      new google.maps.Map(ReactDOM.findDOMNode(this), {
        zoom: 4,
        center: {lat: 39.50, lng: -98.35}
      })
    )
  }

  componentWillUpdate(nextProps) {
    fitZoom([nextProps.markerA, nextProps.markerB], this.props.map)
  }

  render() {
    return (
      <div className={styles.mapBox}>
        {this.props.children}
      </div>
    );
  }
}

Map.propTypes = {
  children: PropTypes.any.isRequired,
  saveMap: PropTypes.func,
  map: PropTypes.any.isRequired
};



// Adjust the zoom of the map
// Only adjust when there are two markers
function fitZoom(markers, map) {
  if(!markers[0] || !markers[1]) return;
  const bounds = new google.maps.LatLngBounds();
  markers.forEach(mrk => {
    if(mrk) bounds.extend(mrk.getPosition())
  });
  map.fitBounds(bounds);
}
