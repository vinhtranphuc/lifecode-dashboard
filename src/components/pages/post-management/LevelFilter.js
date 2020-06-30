import React, { Component } from "react";
import { FormCheckbox } from "shards-react";
import { Row} from "shards-react";


class LevelFilter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            level_1: false,
            level_2: false,
            level_3: false,
            level_4: false,
            level_5: false,
            levels:[]
        };
    }

    handleChange(e, level) {
        const newState = {};
        newState['level_'+level] = !this.state['level_'+level];
        this.setState({ ...this.state, ...newState });

        let {levels} = this.state;
        if(levels.includes(level)) {
            let index = levels.indexOf(level);
            if(index !== -1) levels.splice(index,1);
        } else {
            levels.push(level);
        }
        this.props.handleFilterLevel&&this.props.handleFilterLevel(levels);
    }

    render() {
        return (
            <Row className="pl-3">
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_1}
                    onChange={e => this.handleChange(e, 1)}
                >
                    1
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_2}
                    onChange={e => this.handleChange(e, 2)}
                >
                    2
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_3}
                    onChange={e => this.handleChange(e, 3)}
                >
                    3
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_4}
                    onChange={e => this.handleChange(e, 4)}
                >
                    4
                </FormCheckbox>
                <FormCheckbox className="mt-1 mb-1 mr-3"
                    checked={this.state.level_5}
                    onChange={e => this.handleChange(e, 5)}
                >
                    5
                </FormCheckbox> 
            </Row>
        );
    }
}

export default LevelFilter;