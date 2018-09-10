'use strict';
const getDaysInMonth = (m, y) => {
  return /8|3|5|10/.test(m)?30:m==1?(!(y%4)&&y%100)||!(y%400)?29:28:31;
};
const getWeekday = dayNumber => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[dayNumber];
};

const Calendar = (props) => {
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  const date = props.date.getDate();
  const weekdayNumber = props.date.getDay();
  const daysInMonth = getDaysInMonth(month, year);
  const currentWeekday = getWeekday(weekdayNumber);
  const firstWeekday = props.date.setDate(1).getDay();
  const lastWeekday = new Date(year, month + 1, 0).getDay();

  const 
  return (
    <div classNameName="ui-datepicker">
      <div classNameName="ui-datepicker-material-header">
        <div classNameName="ui-datepicker-material-day">{currentWeekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date}</div>
          <div className="ui-datepicker-material-month">{month}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
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
          <tr>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
  </table>
</div>
  );
  if (firstWeekday !== 0) {

  }



  console.log(daysInMonth)
};