function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}
const getStyles = (props) => {
	let size, opacity, right, height, width;
	switch (props.className) {
		case "Charts--item":
			size = props.item / (props.max) * 100;
			opacity = props.item / props.max + .05;
			if (props.ChartsClassName === "Charts horizontal") {
				width = size + '%';
				break;
			}
			height = size + '%';
		break;
		case "Charts--item stacked":
			size = props.item / props.sum * 100;
			opacity = 1;
			height = size + '%';
		break;
		case "Charts--item layered":
			size = props.item / (props.max) * 100;
			opacity = props.item / props.max + .05;
			right = ((props.sortedSerie.indexOf(props.item) / (props.serie.length + 1)) * 100) + '%';
			height = size + '%';
		break;
		case "Charts--item":
		break;
		case "Charts--item":
		break;
	}
	return {size, opacity, right, height, width};
} 

class ChartsItem extends React.Component {
	render() {
		const props = this.props,
			elementStyles = getStyles(props),
			color = props.colors[props.itemIndex], 
			style = {
				backgroundColor: color,
				opacity: elementStyles.opacity,
				zIndex: props.item,
				height: elementStyles.height,
				width: elementStyles.width,
				right: elementStyles.right
			};
		return (
			<div className={props.className} style={style} key={props.itemIndex}>
				<b style={{ color: color }}>{props.item}</b>
			</div>
		);
	}
}

class ChartsSerie extends React.Component {
	render() {
		const props = this.props;
		const ChartsItemList = props.serie.map((item, itemIndex) => {
			const base = {item, itemIndex, className: props.ChartsItemClass};
			const newProps = Object.assign({}, props, base);
			return <ChartsItem {...newProps} />
		})
		const labelArrName = props.ChartsClassName === "Charts" ? props.labels : props.series;
		return (
			<div className={props.className} key={props.serieIndex} style={{ height: props.height }}>
				<label>{labelArrName[props.serieIndex]}</label>
				{ChartsItemList}
			</div>
		);
	}
}

class ChartsListItem extends React.Component {
	render() {
		const props = this.props;
		const sortedSerie = props.serie.slice(0);
		let sum = props.serie.reduce((carry, current) => carry + current, 0);
		sortedSerie.sort(compareNumbers);
		const base = {sum, sortedSerie};
		const newProps = Object.assign({}, props, base);
		return <ChartsSerie {...newProps} className={props.ChartsListItemClass} />;
	}
}

class Charts extends React.Component {
	render() {
		const props = this.props;
		const ChartsList = props.data.map((serie, serieIndex) => {
			const base = {serie, serieIndex, ChartsClassName: props.className};
			const newProps = Object.assign({}, props, base);
			return <ChartsListItem {...newProps}/>;
		});
		return <div className={props.className}>{ChartsList}</div>;
	}
}

class Labels extends React.Component {
	render() {
		const props = this.props;
		return (
			<div>
				<span className="Legend--color" style={{ backgroundColor: props.colors[props.labelIndex % props.colors.length] }} />
				<span className="Legend--label">{props.label}</span>
			</div>
		);
	}
}

class Legend extends React.Component {
	render() {
		const props = this.props;
		const LabelsBlock = props.labels.map((label, labelIndex) => {
			const base = {label, labelIndex};
			const newProps = Object.assign({}, props, base);
			return <Labels {...newProps} />;
		});
		return <div>{LabelsBlock}</div>;
	}
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const props = this.props;
		const max = data.reduce((max, serie) => 
			Math.max(max, serie.reduce((serieMax, item) => 
				Math.max(serieMax, item), 0)), 0);
		const base = {
			data, 
			colors, 
			labels, 
			series, 
			max
		};
		const newProps = Object.assign({}, props, base);

		const chartsItemProps = {
			ChartsListItemClass: "Charts--serie",
			ChartsItemClass: "Charts--item",
			height: 250
		}
		const newChartsItemProps = Object.assign({}, newProps, chartsItemProps);

		const chartsItemStackedProps = {
			ChartsListItemClass: "Charts--serie stacked",
			ChartsItemClass: "Charts--item stacked"
		}
		const newChartsItemStackedProps = Object.assign({}, newChartsItemProps, chartsItemStackedProps);

		const chartsItemLayeredProps = {
			ChartsListItemClass: "Charts--serie layered",
			ChartsItemClass: "Charts--item layered"
		}
		const newChartsItemLayeredProps = Object.assign({}, newChartsItemProps, chartsItemLayeredProps);

		const chartsItemHorizontalProps = Object.assign({}, newChartsItemProps, {height: "auto"});
		return (
			<section>
				<Charts className="Charts" {...newChartsItemProps} />
				<Charts className="Charts" {...newChartsItemStackedProps} />
				<Charts className="Charts" {...newChartsItemLayeredProps} />
				<Charts className="Charts horizontal" {...chartsItemHorizontalProps} />
        <Legend className="Legend" {...newProps}/>
			</section>
		);
	}
}
