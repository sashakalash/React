class ProgressBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      progress: 0
    }
  }

  drawCircle(radius, color, isBack, progress = 1) {
    const obCanvas = this.Canvas.getContext('2d');
    obCanvas.beginPath();
    obCanvas.arc(this.Canvas.width / 2, this.Canvas.height / 2, radius, 0, progress * 2 * Math.PI, isBack);
    obCanvas.lineWidth = 7;
    obCanvas.strokeStyle = color;
    obCanvas.stroke();
  }

  componentDidMount() {
    this.drawCircle(52, '#4ca89a', false);
  }

  componentWillReceiveProps(newProps) {
    const progress = newProps.completed / newProps.total;
    let isBack, color;
    if (progress > this.state.progress) {
      isBack = false;
      color = '#96d6f4';
    } else {
      isBack = true;
      color = '#ffffff';
    }
    this.setState({progress})
    this.drawCircle(45, color, isBack, progress);
  }

  render() {
    return (
      <canvas ref={el => this.Canvas = el} id="progressCanvas" className="progress" />
    );
  }
}
