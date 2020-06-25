import React, { Component } from "react";
import { Space, Pagination } from "antd";
import {
  Row,
  Col
} from "shards-react";
import { FundViewOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts } from '../../../actions/postsAction';
class PostList extends Component {

  componentDidMount() {
    const params = {
      start_post:1,
      records_no:30
    }
    this.props.getPosts(params);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.posts);
  }
  render() {
    const {list,page_of_post,last_page} = this.props.posts;
    return (
      <>
        <Row>
          <Col lg="12" md="12">
            <div className="table-responsive p-2">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                        </th>
                    <th scope="col" className="border-0">
                      Title
                        </th>
                    <th scope="col" className="border-0">
                      Category
                        </th>
                    <th scope="col" className="border-0">
                      Level
                        </th>
                    <th scope="col" className="border-0">
                      Tags
                        </th>
                    <th scope="col" className="border-0">
                      Create At
                        </th>
                    <th scope="col" className="border-0">
                      Users
                        </th>
                    <th scope="col" className="border-0">
                      Time of views
                        </th>
                    <th scope="col" className="border-0">
                      Comments
                        </th>
                    <th scope="col" className="border-0">
                      Actions
                        </th>
                  </tr>
                </thead>
                <tbody>
                  {list&&list.map((e,i) => {
                    return(
                      <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{e.title}</td>
                        <td>{e.category.category}</td>
                        <td>{e.level}</td>
                        <td>{e.tags.map((item,index,arr) => {return (item.tag)+(index<(arr.length-1)?', ':'')})}</td>
                        <td>{e.created_at}</td>
                        <td>{e.users.map((item,index,arr) => {return (item.user_id)+(index<(arr.length-1)?', ':'')})}</td>
                        <td>{e.times_of_view}</td>
                        <td>{e.number_of_comments}</td>
                        <td className="posts-action">
                          <Space size="middle">
                            <FundViewOutlined />
                            <EditOutlined />
                            <DeleteOutlined />
                          </Space>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <Pagination className="mt-3" defaultCurrent={page_of_post} total={last_page} />
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
  return bindActionCreators({ getPosts: getPosts }, dispatch);
}

export default connect(mapSateToProps, mapDispatchToProps)(PostList);