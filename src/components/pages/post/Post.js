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
import {createPost,editPost,getPostByPostId} from "../../../actions/postsAction";
import './CreatePost.css';
import PostImages from "./PostImages";
import { notification } from 'antd';

class Post extends React.Component {

  constructor(props) {
    super(props);
    let post_id = props.match.params.post_id;
    post_id = post_id?post_id:''
    this.state = {
      isSaved:false,
      postPrm: {
        postId:post_id,
        categoryId:'',
        tags:[],
        level:5,
        postImages:[],
        title:'',
        content:''
      }
    }
  }

  async componentDidMount() { 
    const {postId} = this.state.postPrm;
    if(postId && postId.length > 0) {
      let status = 0;
      await this.props.getPostByPostId({post_id:postId}).then((result) => {
        status = 200;
      }).catch(function (error) {
        status = error.response.status;
      });
      if(status === 200) {
        this.setState({
          isSaved: true
        })
      }
      if(status === 404) {
        this.props.history.push('/not-found');
      }
    }
  }

  componentWillReceiveProps(newProps) {
    const {post} = newProps;
    this.setPostState(post);
    // postPrm.postId = post.post_id;
    // postPrm.categoryId = post.category_id;
    // postPrm.tags = post.tags.map(item => item.tag_id);
    // postPrm.level = post.level;
    // postPrm.postImages = post.images.map(item => item.path);
    // postPrm.title = post.title;
    // postPrm.content = post.content;
    // this.setState({
    //   postPrm: postPrm
    // })
  }

  setPostState(post) {
    const {postPrm} = this.state;
    postPrm.postId = post.post_id;
    postPrm.categoryId = post.category_id;
    postPrm.tags = post.tags.map(item => item.tag_id);
    postPrm.level = post.level;
    postPrm.postImages = post.images.map(item => item.path);
    postPrm.title = post.title;
    postPrm.content = post.content;
    this.setState({
      postPrm: postPrm
    })
  }
 
  handleGetTitle(title) {
    const {postPrm} = this.state;
    postPrm.title = title;
    this.setState({
      postPrm: postPrm
    })
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
    if(this.state.postPrm.categoryId === categoryId) {
      categoryId = "";
    }
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
    let {isSaved,postPrm} = this.state;
    postPrm.content = content; // put conent to prm

    if(!isSaved) {
      this.props.createPost(postPrm).then((result) => {
          this.props.history.push('/post/edit/'+result.data.data);
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
    else {
      this.props.editPost(postPrm).then((result) => {
        const post = result.data.data;
        this.setPostState(post);
        notification.success({
          message: 'Life Code',
          description: result.data.message,
        });
      }).catch(function (error) {
        debugger
        // const {messages} = error.response.data;
        //   messages.map((item) => {
        //     return (
        //       notification.warning({
        //         message: 'Life Code',
        //         description: item
        //       })
        //     )
        //   })
      });
    }
    
  }
  render () {
    const {postPrm} = this.state;
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="" subtitle={this.state.isSaved?'Edit Post':'Create Post'} className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="9" md="12">
            <Row>
              <Col lg="12" md="12">
               <Editor title={postPrm.title} content={postPrm.content} handleGetTitle={this.handleGetTitle.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col lg="7" md="12">
                <PostImages postImages={this.state.postPrm.postImages} handleGetPostImages={this.handleGetPostImages.bind(this)}/>
                {/* postImages={this.state.postPrm.postImages} */}
              </Col>
              <Col lg="5" md="12">
                <SidebarActions
                  isSaved={this.state.isSaved}
                  level={this.state.postPrm.level}
                  onRef={ref => (this.actions = ref)}
                  handleGetLevel={this.handleGetLevel.bind(this)}
                  handleSave={this.handleSave.bind(this)}/>
              </Col>
            </Row>
          </Col>
          <Col lg="3" md="12">
            <SidebarCategories categoryId={this.state.postPrm.categoryId} handleGetCategory={this.handleGetCategory.bind(this)}/>
            <SidebarTags checkTags={this.state.postPrm.tags} handleGetTagCheck={this.handleGetTagCheck.bind(this)}/>
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
  return bindActionCreators({createPost:createPost,editPost:editPost,getPostByPostId:getPostByPostId},dispatch);
} 

export default connect(mapSateToProps,mapDispatchToProps)(Post);

