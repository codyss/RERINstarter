import React from 'react';
import MapContainer from './MapContainer.jsx';
import MainView from '../components/MainView.jsx';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
    this.saveMap = this.saveMap.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.markers !== this.props.markers
  }

  addMarker(id, marker) {
    // function to pass as props to Marker component
    this.props.dispatch(Actions.addMarker(id, marker))
  }

  saveMap(map) {
    // function to pass as props to Map component
    this.props.dispatch(Actions.saveMap(map))
  }

  render() {
    return (
      <MainView>
        <MapContainer
          places={this.props.places}
          addMarker={this.addMarker}
          markers={this.props.markers}
          saveMap={this.saveMap}
          map={this.props.map}
        />
      </MainView>
    );
  }
}

function mapStateToProps(store) {
  return {
    places: store.main.get('places'),
    markers: store.main.get('markers'),
    map: store.main.get('map')
  }
}

export default connect(mapStateToProps)(App)
