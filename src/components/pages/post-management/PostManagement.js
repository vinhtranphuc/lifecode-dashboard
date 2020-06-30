import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormInput } from "shards-react";

import PageTitle from "../../fragements/PageTitle";
import CategoryFilter from "./CategoryFilter";
import DateFilter from "../../fragements/DateFilter";
import LevelFilter from "./LevelFilter";
import TagFilter from "./TagFilter";
import PostList from "./PostList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts } from '../../../actions/postsAction';

class PostManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postPrm : {
        page: '',
        records_no: 7,
        all: 'true',
        created_at: '',
        tag_ids: [],
        userNameOrEmail:'',
        category_id:'',
        levels:[]
      }
    }
  }

  componentDidMount() {
    const {postPrm} = this.state;
    postPrm.page = 1;
    this.props.getPosts(postPrm);
  }

  handleFilterTags (tag_ids) {
    let {postPrm} = this.state;
    postPrm.tag_ids = tag_ids;
    this.props.getPosts(postPrm);
    this.setState({
      postPrm:postPrm
    })
  }
  handleFilterCategory (categoryId) {
    let {postPrm} = this.state;
    postPrm.category_id = categoryId;
    this.props.getPosts(postPrm);
    this.setState({
      postPrm:postPrm
    })
  }
  handleFilterUserNameOrEmail(e) {
    const userNameOrEmail = e.target.value;
    let {postPrm} = this.state;
    postPrm.userNameOrEmail = userNameOrEmail;
    this.props.getPosts(postPrm);
    this.setState({
      postPrm:postPrm
    })
  }

  handleFilterLevel(levels) {
    let {postPrm} = this.state;
    postPrm.levels = levels;
    this.props.getPosts(postPrm);
    this.setState({
      postPrm:postPrm
    })
  }

  handleFilterDate(date) {
    let {postPrm} = this.state;
    postPrm.created_at = date;
    this.props.getPosts(postPrm);
    this.setState({
      postPrm:postPrm
    })
  }

  render() {
    return (<Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" subtitle="Post Management" className="text-sm-left" />
      </Row>
      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <Row form>
                <Col md="2" className="form-group">
                  <strong className="text-muted d-block mb-2">User name or email</strong>
                  <Row className="pl-3 pr-3">
                    <FormInput size="sm" onChange={this.handleFilterUserNameOrEmail.bind(this)}>
                    </FormInput>
                  </Row>
                </Col>
                <Col md="1" className="form-group">
                  <strong className="text-muted d-block mb-2">Create date</strong>
                  <DateFilter handleFilterDate={this.handleFilterDate.bind(this)}></DateFilter>
                </Col>
                <Col md="1" className="form-group">
                  <strong className="text-muted d-block mb-2">Categories</strong>
                  <CategoryFilter handleFilterCategory={this.handleFilterCategory.bind(this)}></CategoryFilter>
                </Col>
                <Col md="2">
                  <strong className="text-muted d-block mb-2">Post level</strong>
                  <LevelFilter handleFilterLevel={this.handleFilterLevel.bind(this)}></LevelFilter>
                </Col>
                <Col md="6">
                  <strong className="text-muted d-block mb-2">Tags</strong>
                  <TagFilter handleFilterTags={this.handleFilterTags.bind(this)}></TagFilter>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <PostList postPrm={this.state.postPrm}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts: getPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostManagement);