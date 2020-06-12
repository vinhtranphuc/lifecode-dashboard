import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormInput } from "shards-react";

import PageTitle from "../../fragements/PageTitle";
import CategoryFilter from "../../fragements/Categories";
import DateFilter from "../../fragements/DateFilter";
import TagsFilter from "../../fragements/Tags";
import PostList from "./PostList";

const PostManagement = () => (
  <Container fluid className="main-content-container px-4">
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
                  <FormInput size="sm">
                  </FormInput>
                </Row>
              </Col>
              <Col md="1" className="form-group">
                <strong className="text-muted d-block mb-2">Create date</strong>
                <DateFilter></DateFilter>
              </Col>
              <Col md="1" className="form-group">
                <strong className="text-muted d-block mb-2">Categories</strong>
                <CategoryFilter></CategoryFilter>
              </Col>
              <Col md="8">
                <strong className="text-muted d-block mb-2">Tags</strong>
                <TagsFilter></TagsFilter>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <PostList/>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default PostManagement;
