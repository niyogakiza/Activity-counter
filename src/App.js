import React, { Component } from 'react';
import {SkiDayList} from './components/SkiDayList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkiDayList days={
            [
                {
                    resort: 'Squash Valley',
                    data: new Date("1/2/2016"),
                    powder: true,
                    backcountry: false
,
                },
                {
                    resort: 'Kirkwood',
                    data: new Date("3/28/2016"),
                    powder: false,
                    backcountry: false
                    ,
                },
                {
                    resort: 'Mt. Tallac',
                    data: new Date("4/2/2016"),
                    powder: false,
                    backcountry: true
                    ,
                }
            ]
        }
        />
      </div>
    );
  }
}

export default App;
