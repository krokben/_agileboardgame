import React, {Component} from 'react';

export default class Calendar extends Component {
    render() {
        return (
            <div className="Calendar_container">
                <div className="Calendar_column">
                    <div className="Calendar_header">Sprint</div>
                    <div>1st</div>
                    <div>2nd</div>
                    <div>3rd</div>
                    <div>4th</div>
                    <div>5th</div>
                    <div>6th</div>
                    <div>7th</div>
                    <div>8th</div>
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Monday</div>
                    {this.renderCalendar('1')}
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Tuesday</div>
                    {this.renderCalendar('2')}
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Wednesday</div>
                    {this.renderCalendar('3')}
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Thursday</div>
                    {this.renderCalendar('4')}
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Friday</div>
                    {this.renderCalendar('5')}
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Saturday</div>
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Sunday</div>
                </div>
            </div>
        );
    }

    renderCalendar(weekday) {
        return this.props.days.filter((x) => x.title === weekday).map((day) => {
            const sickWorkers = this.props.workers.filter((x) => x.sick !== '0');
            const today = this.props.days.filter((x) => x.current === 'yes')[0];
            let sickClassName = null;

            if (sickWorkers.length > 0 && Number(day.id) === sickWorkers[0].sick) {
                sickClassName = 'Calendar_sick';
            } else if (day.id === today.id) {
                sickClassName = 'Calendar_today';
            }

            return <div key={day.id} id={day.id} className={sickClassName}>{day.title}</div>
        });
    }
}