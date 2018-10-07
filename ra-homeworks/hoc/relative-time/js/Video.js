'use strict';

const MakingDatePretty = Component => {
  return class extends React.Component {
    getPrettyDate() {
      const now = new Date();
      const inputDate = new Date(this.props.date)
      const diff = now - inputDate;
      const hours = parseInt(diff / (1000 * 60 * 60));
      const days = parseInt(hours / 24);
      return hours <= 1 ? '12 минут назад' : hours <= 24 ? '5 часов назад' : `${days} дней назад`;
    }

    render() {
      const prettyDate = this.getPrettyDate();
      return <Component date={prettyDate}/>
    }
  }
}

const DateTimePretty = MakingDatePretty(DateTime);

const Video = props => {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
};