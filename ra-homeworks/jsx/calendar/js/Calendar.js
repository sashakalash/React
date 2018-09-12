'use strict';

const getDaysInMonth = (m, y) => {
  return /8|3|5|10/.test(m)?30:m==1?(!(y%4)&&y%100)||!(y%400)?29:28:31;
};
const getWeekday = dayNumber => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[dayNumber];
};

const getMonthName = month => {
  const names = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return names[month];
}

String.prototype.firstLetterCaps = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const Calendar = (props) => {
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  const date = props.date.getDate();
  const weekdayNumber = props.date.getDay();
  const daysInMonth = getDaysInMonth(month, year);
  const daysInLastMonth = new Date(year, month, 0).getDate();
  const currentWeekday = getWeekday(weekdayNumber);
  const firstWeekday = new Date(props.date.setDate(1)).getDay();
  const lastWeekday = new Date(year, month + 1, 0).getDay();
  const nameMonth = props.date.toLocaleString("ru", {month: 'long'}).firstLetterCaps();
  const nameMonthInclined = getMonthName(month);

  const allDays = [];

  for (let i = daysInLastMonth - firstWeekday + 2; i <= daysInLastMonth; i++) {
    allDays.push(<td className="ui-datepicker-other-month">{i}</td>);
  } 
  for (let i = 1; i <= daysInMonth; i++) {
    if (i === date) {
      allDays.push(<td className="ui-datepicker-today">{i}</td>);
      continue;
    }
    allDays.push(<td>{i}</td>);
  }
  if (lastWeekday !== 0) {
    let j = 1;
    for (let i = lastWeekday; i <= 6; i++) {
      allDays.push(<td className="ui-datepicker-other-month">{j}</td>);
      j++;
    }
  }
  
  const allDaysForWeeks = [];
  allDays.reduce((res, day) => {
    if (res.length === 7) {
      allDaysForWeeks.push(res);
      res = [];
    }
    res.push(day);
    return res;
  }, []);
      
  const allMonth = allDaysForWeeks.map(week => <tr>{week}</tr>);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{currentWeekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date}</div>
          <div className="ui-datepicker-material-month">{nameMonthInclined}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{nameMonth}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {allMonth}
        </tbody>
      </table>
    </div>
  );
}