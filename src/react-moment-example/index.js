import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

const dob = new Date('May 30, 1990 03:24:00');

const iid = '1947-08-15'; // YYYYY-MM-DD
const App = () => (
    <div>
        <h1>Sample App</h1>
            <p>{ moment(dob).format('MMMM Do YYYY, h:mm:ss a') }</p>
            <p>{ moment(dob).format('dddd')  }</p>
            <p>{ moment(dob).fromNow(true)  }</p>
            <p>{ moment(iid,"YYYY-MM-DD").format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p>{ moment(iid,"YYYY-MM-DD").fromNow()}</p>
            <DatePick/>
           
    </div>
)

class DatePick extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDate: "2018-04-25"
        }

        this.dateChange = this.dateChange.bind(this);
    }

    dateChange(e) {

        console.log('>',e.target.value)

        this.setState({ selectedDate: e.target.value });

    }

    render() {
        return(
        <div>
            <input type="date" value={ this.state.selectedDate } onChange={ this.dateChange }/>
            <p>{ moment(this.state.selectedDate,'YYYY-MM-DD').fromNow() }</p>
        </div>
        )
    }
}

render(<App/>, document.getElementById('app'))