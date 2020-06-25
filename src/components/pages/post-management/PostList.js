import React, { Component } from "react";
import {Space,Pagination} from "antd";
import {
  Row,
  Col
} from "shards-react";
import { FundViewOutlined ,EditOutlined ,DeleteOutlined  } from '@ant-design/icons';
class PostList extends Component {

    render() {
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
                      <tr>
                        <th scope="row">1</th>
                        <td>Ali</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td>107-0339</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td className="posts-action">
                          <Space size="middle">
                            <FundViewOutlined/>
                            <EditOutlined/>
                            <DeleteOutlined />
                          </Space>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ali</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td>107-0339</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td className="posts-action">
                          <Space size="middle">
                            <FundViewOutlined/>
                            <EditOutlined/>
                            <DeleteOutlined />
                          </Space>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ali</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td>107-0339</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td className="posts-action">
                          <Space size="middle">
                            <FundViewOutlined/>
                            <EditOutlined/>
                            <DeleteOutlined />
                          </Space>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ali</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td>107-0339</td>
                        <td>Kerry</td>
                        <td>Russian</td>
                        <td>Gdańsk</td>
                        <td className="posts-action">
                          <Space size="middle">
                            <FundViewOutlined/>
                            <EditOutlined/>
                            <DeleteOutlined />
                          </Space>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Pagination className="mt-3" defaultCurrent={1} total={50} />
                </div>
              </Col>
            </Row>
          </>
        );
    }
}

export default PostList;