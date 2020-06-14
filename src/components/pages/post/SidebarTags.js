
import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox
} from "shards-react";

import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {addTag,removeTag,getTags} from "../../../actions/tagsAction";
import { Popconfirm,notification } from 'antd';

class SidebarTags extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tagName:''
    }
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleCheckTag = this.handleCheckTag.bind(this);
    this.loadTags = this.loadTags.bind(this);
  }

  componentDidMount() {
    this.props.getTags();
  }
  
  handleTagNameChange = (e) => {
    this.setState({
      tagName: e?e.target.value:''
    })
  }

  handleCheckTag = (e) => {
    let tagId = parseInt(e.currentTarget.getAttribute('tagId'));
    var arr = [...this.props.checkTags];
    if(e.currentTarget.checked) {
      arr.push(tagId);
    } else {
      var index = arr.indexOf(tagId);
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
    this.props.handleGetTagCheck(arr);
  }

  handleAddTag = (e) => {
    if(!this.state.tagName || this.state.tagName === "") {
      notification.warning({
        message: 'Life Code',
        description: 'Please input tag name !'
      });
      return;
    }

    const tagPrm = {
      tag: this.state.tagName
    }
    this.props.addTag(tagPrm).then((result) => {
        notification.success({
          message: 'Life Code',
          description: result.data.message,
        });
        this.props.getTags();
        this.setState({tagCheck: []});
    }).catch(function (error) {
        notification.warning({
          message: 'Life Code',
          description: error.response.data.message
        });
   });
  }

  handleRemoveTag = async (e) => {
    const tagPrm = this.props.checkTags;
    await this.props.removeTag(tagPrm).then((result) => {
      notification.success({
        message: 'Life Code',
        description: result.data.message
      });
      this.props.getTags();
      this.setState({tagCheck: []});
    }).catch(function (error) {
      notification.warning({
        message: 'Life Code',
        description: error.response.data.message
      }); 
    });
    this.props.handleGetTagCheck([]);
  }

  loadTags(tags) {
    let result = [];
    for(let i=0;i<tags.length;i++) {
      if(((i+1)%2) !== 0) {
        result.push(
          <div key={i} className="row">
            {<div className="col-md-6">
            <FormCheckbox checked={this.isCheckedTag(tags[i].tag_id,this.props.checkTags)} key={tags[i].tag_id} tagid={tags[i].tag_id} onChange={this.handleCheckTag} className="mb-1" value="design">
              {tags[i].tag}
            </FormCheckbox>
            </div>}
            {(i+1)<tags.length&&<div className="col-md-6">
            <FormCheckbox checked={this.isCheckedTag(tags[i+1].tag_id,this.props.checkTags)} key={tags[i+1].tag_id} tagid={tags[i+1].tag_id} onClick={this.handleCheckTag} className="mb-1" value="design">
              {tags[i+1].tag}
            </FormCheckbox>
            </div>}
          </div>
        )
      }
    }
    return result;
  }

  isCheckedTag = (tagId, checkTags) => {
    return checkTags.includes(tagId);
  }

  render() {
    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{this.props.title}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              {this.loadTags(this.props.tags)}
            </ListGroupItem>
            <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <Popconfirm
                  placement="left"
                  title={"Are you sure to remove these tag?"}
                  onConfirm={this.handleRemoveTag.bind(this)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button outline style={{display:this.props.checkTags.length>0?"block":"none"}} theme="danger" className="mr-2" size="sm">
                    <i className="material-icons">delete</i>Delete
                  </Button>
                </Popconfirm>
                <input placeholder="new tag" className="form-control" value={this.state.tagName} onChange={this.handleTagNameChange}></input>
                <InputGroupAddon type="append">
                  <Button theme="white" className="px-2" onClick={this.handleAddTag}>
                    <i className="material-icons">add</i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    )
  }
}
SidebarTags.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarTags.defaultProps = {
  title: "Tags"
};

const mapSateToProps = (state) => {
  return {
    tags: state.tags
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTag:addTag,removeTag:removeTag,getTags:getTags},dispatch);
} 

export default connect(mapSateToProps,mapDispatchToProps)(SidebarTags);
