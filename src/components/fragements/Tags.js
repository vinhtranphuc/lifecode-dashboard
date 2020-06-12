import React, { Component } from "react";
import { FormCheckbox } from "shards-react";
import { Row} from "shards-react";


class TagsFilter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            orange: false,
            lemon: false,
            kiwi: false
        };
    }

    handleChange(e, fruit) {
        const newState = {};
        newState[fruit] = !this.state[fruit];
        this.setState({ ...this.state, ...newState });
    }

    render() {
        return (
            <Row className="pl-3">
                <FormCheckbox className="mb-2 mr-2"
                    checked={this.state.orange}
                    onChange={e => this.handleChange(e, "orange")}
                >
                    Orange
                </FormCheckbox>
                <FormCheckbox className="mb-2 mr-2"
                    checked={this.state.lemon}
                    onChange={e => this.handleChange(e, "lemon")}
                >
                    Lemon
                </FormCheckbox>
                <FormCheckbox className="mb-2 mr-2"
                    checked={this.state.kiwi}
                    onChange={e => this.handleChange(e, "kiwi")}
                >
                    Kiwi
                </FormCheckbox> 
            </Row>
        );
    }
}

export default TagsFilter;