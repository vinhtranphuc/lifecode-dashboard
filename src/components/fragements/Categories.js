import React, { Component } from "react";
import { FormSelect } from "shards-react";
import { Row} from "shards-react";

class CategoryFilter extends Component {
    render() {
        return (
            <Row className="pl-3 pr-3">
                <FormSelect size="sm">
                    <option value="first">all</option>
                    <option value="second">XXX</option>
                    <option value="third">YYY</option>
                </FormSelect>
            </Row>
        );
    }
}

export default CategoryFilter;