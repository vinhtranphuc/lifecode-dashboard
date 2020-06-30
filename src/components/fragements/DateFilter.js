import React, { Component } from "react";
import { Row } from "shards-react";
import moment from 'moment';
import { DatePicker } from 'antd';

class DateFilter extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (date, dateString) => {
        this.props.handleFilterDate&&this.props.handleFilterDate(dateString);
    };
    render() {
        return (
            <Row className="pl-3 pr-3">
                <DatePicker
                        onChange={this.handleChange}
                    />
            </Row>
        );
    }
}

export default DateFilter;