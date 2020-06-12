import React from "react";
import ReactDOM from 'react-dom';

import { Container, Row, Col } from "shards-react";

import PageTitle from "../../fragements/PageTitle";
import Editor from "./Editor";
import SidebarActions from "./SidebarActions";
import SidebarTags from "./SidebarTags";
import SidebarCategories from "./SidebarCategories";

import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {createPost,getPostByPostId} from "../../../actions/postsAction";
import './CreatePost.css';
import PostImages from "./PostImages";
import { notification } from 'antd';

class Post extends React.Component {

  constructor(props) {
    super(props);

    let post_id = props.match.params.post_id;
    if(post_id) {
      let params = {
        post_id:post_id
      }
      this.props.getPostByPostId(params);
    }
    
    this.state = {
      isSaved:false,
      postPrm: {
        categoryId:'',
        tags:[],
        level:5,
        postImages:[],
        title:'',
        content:''
      }
    }
  }

  componentWillReceiveProps(newProps) {
    const {post} = newProps;
    const {postPrm} = this.state;
    postPrm.categoryId = post.post_id;
    postPrm.tags = post.tags.map(item => item.tag_id);
    postPrm.postImages = post.images.map(item => item.path);
    // this.setState({
    //   postPrm: post
    // })
  }
 
  handleGetTitle(title) {
    const {postPrm} = this.state;
    postPrm.title = title;
    this.setState({
      postPrm: postPrm
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    const {tags, categoryId, title, level, postImages, content} = nextState.postPrm;
    return tags.length < 1 && categoryId==='' && title==='' && level === 0 && postImages.length < 1 && content === '';
  }
  handleGetPostImages(postImages) {
    const {postPrm} = this.state;
    postPrm.postImages = postImages;
    this.setState({
      postPrm: postPrm
    })
  }
  handleGetTagCheck(tags) {
    const {postPrm} = this.state;
    postPrm.tags = tags;
    this.setState({
      postPrm: postPrm
    })
  }
  handleGetCategory(categoryId) {
    const {postPrm} = this.state;
    postPrm.categoryId = categoryId;
    this.setState({
      postPrm: postPrm
    })
  }
  handleGetLevel(level) {
    const {postPrm} = this.state;
    postPrm.level = level;
    this.setState({
      postPrm: postPrm
    })
  }

  handleSave() {
    // get content 
    const ckContent = ReactDOM.findDOMNode(this).getElementsByClassName('ck-content')[0];
    const content = ckContent?ckContent.innerHTML:"";

    // get prm
    let {postPrm} = this.state;
    postPrm.content = content; // put conent to prm
    this.props.createPost(postPrm).then((result) => {

      this.actions.updateSaveStatus(true);
      notification.success({
        message: 'Life Code',
        description: result.data.message,
      });
    }).catch(function (error) {
      const {messages} = error.response.data;
        messages.map((item) => {
          return (
            notification.warning({
              message: 'Life Code',
              description: item
            })
          )
        })
    });
  }
  render () {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="" subtitle="Create Post" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="9" md="12">
            <Row>
              <Col lg="12" md="12">
               <Editor handleGetTitle={this.handleGetTitle.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col lg="7" md="12">
                <PostImages handleGetPostImages={this.handleGetPostImages.bind(this)}/>
              </Col>
              <Col lg="5" md="12">
                <SidebarActions
                  // isSaved={this.state.isSaved}
                  onRef={ref => (this.actions = ref)}
                  handleGetLevel={this.handleGetLevel.bind(this)}
                  handleSave={this.handleSave.bind(this)}/>
              </Col>
            </Row>
          </Col>
          <Col lg="3" md="12">
            <SidebarCategories handleGetCategory={this.handleGetCategory.bind(this)}/>
            <SidebarTags handleGetTagCheck={this.handleGetTagCheck.bind(this)}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    post: state.postByPostId
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createPost:createPost,getPostByPostId:getPostByPostId},dispatch);
} 

export default connect(mapSateToProps,mapDispatchToProps)(Post);

