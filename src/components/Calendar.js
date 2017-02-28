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
                    <div>a</div>
                    <div>{this.props.retrospectives.length > 0 ? <button onClick={() => this.props.displayRetrospective(1)}>Retro</button> : 'a'}</div>
                    <div>{this.props.retrospectives.length > 1 ? <button onClick={() => this.props.displayRetrospective(2)}>Retro</button> : 'a'}</div>
                    <div>{this.props.retrospectives.length > 2 ? <button onClick={() => this.props.displayRetrospective(3)}>Retro</button> : 'a'}</div>
                    <div>{this.props.retrospectives.length > 3 ? <button onClick={() => this.props.displayRetrospective(4)}>Retro</button> : 'a'}</div>
                    <div>{this.props.retrospectives.length > 4 ? <button onClick={() => this.props.displayRetrospective(5)}>Retro</button> : 'a'}</div>
                    <div>{this.props.retrospectives.length > 5 ? <button onClick={() => this.props.displayRetrospective(6)}>Retro</button> : 'a'}</div>
                </div>
                <div className="Calendar_column">
                    <div className="Calendar_header">Sunday</div>
                </div>
            </div>
        );
    }

    // renderRetro() {
    //   const retros = this.props.retrospectives.map()
    // }

    renderCalendar(weekday) {
        return this.props.days.filter((x) => x.title === weekday).map((day) => {
            const sickWorkers = this.props.workers.filter((x) => x.sick !== '0');
            const today = this.props.days.filter((x) => x.current === 'yes')[0];
            let sickClassName = null;

            // Highlights
            if (sickWorkers.length > 0 && Number(day.id) === sickWorkers[0].sick) {
                sickClassName = 'Calendar_sick';
            } else if (day.id === today.id) {
                sickClassName = 'Calendar_today';
            }

            return <div
                key={day.id}
                id={day.id}
                className={sickClassName}
                onClick={() => this.props.clickDay(day.id)}
            >
                {this.props.days[day.id - 1].message !== '' ? day.message : day.id}
            </div>
        });
    }
}
