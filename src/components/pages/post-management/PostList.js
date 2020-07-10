/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Space, Pagination,Popover } from "antd";
import {
  Row,
  Col
} from "shards-react";
import { Popconfirm,notification } from 'antd';
import { FundViewOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts,deletePost } from '../../../actions/postsAction';

class PostList extends Component {

  constructor(props) {
    super(props);
    this.handleLoadPage = this.handleLoadPage.bind(this);
  }

  handleLoadPage(page) {
    const {postPrm} = this.props;
    postPrm.page = page;
    this.props.getPosts(postPrm);
  }
 
  handleChangePage = page => {
    this.handleLoadPage(page);
  }

  more = (text,key) => {
    return <Popover key={key} style={{width:200}} placement="topLeft" content={text}>
        <span className="more-text">...</span>
    </Popover>;
  }
  handleShowText = (text,maxSize, key) => {
    return text.length>maxSize?<span>{[text.substring(0,maxSize-3),this.more(text,key)]}</span>:text;
  }
  handleLoadData = (list,page_of_post) => {
    const records = [];
    const {records_no} = this.props.postPrm;
    let startIndex = records_no*(page_of_post-1)+1;
    {list&&list.map((e,i) => {
      let postId = e.post_id;
      let title = this.handleShowText(e.title,15,i);
      let category = this.handleShowText(e.category.category,15,i);
      let tags = this.handleShowText(e.tags.map(e => ' '+e.tag).toString(),30,i);
      let createAt = this.handleShowText(e.created_at,20,i);
      let users = this.handleShowText(e.users.map(e => ' '+e.username).toString(),20,i);
      let emails = this.handleShowText(e.users.map(e => ' '+e.email).toString(),20,i);
      let timeOfView = this.handleShowText(e.times_of_view,5,i);
      let numberOfComments = this.handleShowText(e.number_of_comments,5,i);
      records.push(
        <tr key={postId}>
          <th scope="row">{startIndex++}</th>
          <td>{title}</td>
          <td>{category}</td>
          <td>{e.level}</td>
          <td>{tags}</td>
          <td>{createAt}</td>
          <td>{users}</td>
          <td>{emails}</td>
          <td>{timeOfView}</td>
          <td>{numberOfComments}</td>
          <td className="posts-action">
            <Space size="middle">
              <FundViewOutlined onClick={() => this.handleView('http://127.0.0.1:3001/home/post/'+postId)}/>
              <EditOutlined onClick={() => this.handleEdit('/post/edit/'+postId)}/>
              <Popconfirm
                  placement="left"
                  title={"Are you sure to delete this post?"}
                  onConfirm={() => this.handleDelete(postId)}
                  okText="Yes"
                  cancelText="No"
                >
                <DeleteOutlined />
              </Popconfirm>
            </Space>
          </td>
        </tr>
      )
    })};
    return records;
  }

  handleView = (url) => {
    window.open(url, "_blank");
  }

  handleEdit = (url) => {
    window.open(url, "_blank");
  }

  handleDelete = (postId) => {
    const param = {post_id:postId};
    this.props.deletePost(param).then((result) => {
      this.handleLoadPage(1);
      notification.success({
        message: 'Life Code',
        description: result.data.message
      });
    }).catch(function (error) {
      notification.warning({
        message: 'Life Code',
        description: error.response.data.message
      }); 
    });
  }
  render() {
    const {list,page_of_post,total_posts} = this.props.posts;
    const {records_no} = this.props.postPrm;
    return (
      <>
        <Row>
          <Col lg="12" md="12">
            <div className="table-responsive p-2">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">#</th>
                    <th scope="col" className="border-0">Title</th>
                    <th scope="col" className="border-0">Category</th>
                    <th scope="col" className="border-0">Level</th>
                    <th scope="col" className="border-0">Tags</th>
                    <th scope="col" className="border-0">Create At</th>
                    <th scope="col" className="border-0">Users</th>
                    <th scope="col" className="border-0">Emails</th>
                    <th scope="col" className="border-0">Time of views</th>
                    <th scope="col" className="border-0">Comments</th>
                    <th scope="col" className="border-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.handleLoadData(list,page_of_post)}
                </tbody>
              </table>
              <Pagination className="mt-3" onChange={this.handleChangePage} defaultPageSize={records_no} current={page_of_post} total={total_posts} />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts: getPosts,deletePost:deletePost }, dispatch);
}

export default connect(mapSateToProps, mapDispatchToProps)(PostList);