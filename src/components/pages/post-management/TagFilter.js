import React, { Component } from "react";
import { Select } from 'antd';
import { Row} from "shards-react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTags } from '../../../actions/tagsAction';

const { Option } = Select;
class TagFilter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.getTags();
    }

    handleChange(tagNames) {
        const tag_ids = this.handleConvertToTagIds(tagNames);
        this.props.handleFilterTags&&this.props.handleFilterTags(tag_ids);
    }

    handleConvertToTagIds(tagNames) {
        const {tags} = this.props;
        let tagIds = tags.filter(e => tagNames.includes(e.tag)).map(e=>e.tag_id);
        return tagIds;
    }

    loadTags(tags) {
        let list = [];
        tags&&tags.map((e,i) => {
            list.push(<Option value={e.tag} key={e.tag_id} >{e.tag}</Option>);
        })
        return list;
    }
    render() {
        return (
            <Row className="pl-3">
                <Select
                    mode="multiple"
                    size={'default'}
                    placeholder="Please select"
                    // defaultValue={['a10', 'c12']}
                    onChange={this.handleChange}
                    style={{ width: '95%' }}
                    >
                    {this.loadTags(this.props.tags)}
                </Select>
            </Row>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        tags: state.tags
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getTags: getTags }, dispatch);
  }
  
  export default connect(mapSateToProps, mapDispatchToProps)(TagFilter);