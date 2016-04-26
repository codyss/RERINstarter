import React from 'react';
import MapContainer from './MapContainer.jsx';
import MainView from '../components/MainView.jsx';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clearPlace = this.clearPlace.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.saveMap = this.saveMap.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.markerA !== this.props.markerA ||
          nextProps.markerB !== this.props.markerB
  }

  addMarker(id, marker) {
    // function to pass as props to Marker component
    this.props.dispatch(Actions.addMarker(id, marker))
  }

  saveMap(map) {
    // function to pass as props to Map component
    this.props.dispatch(Actions.saveMap(map))
  }

  clearPlace(id) {
    // function to pass as props to Clear Marker component
    this.props.dispatch(Actions.clearMarker(id))
  }

  render() {
    return (
      <MainView>
        <MapContainer
          placeA={this.props.placeA}
          placeB={this.props.placeB}
          addMarker={this.addMarker}
          markerA={this.props.markerA}
          markerB={this.props.markerB}
          saveMap={this.saveMap}
          map={this.props.map}
        />
      </MainView>
    );
  }
}

function mapStateToProps(store) {
  return {
    placeA: store.main.get('placeA'),
    placeB: store.main.get('placeB'),
    markerA: store.main.get('markerA'),
    markerB: store.main.get('markerB'),
    map: store.main.get('map')
  }
}

export default connect(mapStateToProps)(App)
