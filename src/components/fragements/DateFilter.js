import React, { Component } from "react";
import { Row } from "shards-react";
import DatePicker from "react-datepicker";

class DateFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <Row className="pl-3 pr-3">
                <DatePicker className="form-control form-control-sm"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
            </Row>
        );
    }
}

export default DateFilter;