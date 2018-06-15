import React from 'react';
import '../stylesheets/ui.scss';

//Stateless functional components

const percentToDecimal = (decimal) =>{
    return ((decimal * 100) + '%');
};

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal);
};
const SkiDayCount = ({total, powder, backcountry, goal}) => (
        <div className="ski-day-count">
            <div className="total-days">
                <span>{total}</span>
                <span>days</span>
            </div>
            <div className="powder-days">
                <span>{powder}</span>
                <span>days</span>
            </div>
            <div className="backcountry-days">
                <span>{backcountry}</span>
                <span>hiking day</span>
            </div>
            <div>
                    <span>{calcGoalProgress(
                        total,
                        goal)
                    }
                           </span>
            </div>
        </div>
    );

export default SkiDayCount;