import React, { Component } from "react";
import { FormCheckbox } from "shards-react";
import { Row} from "shards-react";


class PostLevelFilter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            level_1: false,
            level_2: false,
            level_3: false,
            level_4: false,
            level_5: false,
        };
    }

    handleChange(e, level) {
        const newState = {};
        newState[level] = !this.state[level];
        this.setState({ ...this.state, ...newState });
    }

    render() {
        return (
            <Row className="pl-3">
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_1}
                    onChange={e => this.handleChange(e, 'level_1')}
                >
                    1
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_2}
                    onChange={e => this.handleChange(e, 'level_2')}
                >
                    2
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_3}
                    onChange={e => this.handleChange(e, 'level_3')}
                >
                    3
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_4}
                    onChange={e => this.handleChange(e, 'level_4')}
                >
                    4
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_5}
                    onChange={e => this.handleChange(e, 'level_5')}
                >
                    5
                </FormCheckbox> 
            </Row>
        );
    }
}

export default PostLevelFilter;