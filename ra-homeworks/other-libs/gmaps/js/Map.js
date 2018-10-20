class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      points: []
    }
  }

  componentDidMount() {
    const myLatLng = { lat: 0, lng: 0 };
    this.map = new google.maps.Map(this.node, {
      center: myLatLng,
      zoom: 0
    });
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.points.lenght) {
      this.state.points.map(office => office.setMap(null))
    }
    const points = [];
    newProps.points.map(office => {
      const marker = new google.maps.Marker(
        {
          map: this.map,
          position: {
            lat: office.lat,
            lng: office.lon
          }
        }
      )
      points.push(marker);
    })
    this.setState({ points })
  }

  componentWillUnmount() {
    this.map.clear();
  }

  render() {
    return (
      <div ref={node => this.node = node}>
        map loading...
      </div>
    );
  }
}
