import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormInput, FormRadio } from "shards-react";

import PageTitle from "../../fragements/PageTitle";
import DateFilter from "../../fragements/DateFilter";
import UserList from "./UserList";

class UserManagement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedUserType: null
    };
    this.changeUserType = this.changeUserType.bind(this);
  }

  changeUserType(userType) {
    this.setState({
      selectedUserType: userType
    });
  }

  render() {
    return(
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" subtitle="User Management" className="text-sm-left" />
        </Row>
        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                 <Row form>
                 <Col md="2" className="form-group">
                    <strong className="text-muted d-block mb-2">Full name</strong>
                    <Row className="pl-3 pr-3">
                      <FormInput size="sm">
                      </FormInput>
                    </Row>
                  </Col>
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
                  <Col md="2">
                    <strong className="text-muted d-block mb-2">Type</strong>
                    <Row className="pl-3 pr-3">
                    <FormRadio
                      inline
                      name="userType"
                      checked={this.state.selectedUserType === "admin"}
                      onChange={() => {
                        this.changeUserType("admin");
                      }}
                    >
                      Mananger
                    </FormRadio>
                    <FormRadio
                      inline
                      name="userType"
                      checked={this.state.selectedUserType === "user"}
                      onChange={() => {
                        this.changeUserType("user");
                      }}
                    >
                      User
                    </FormRadio>
                    </Row>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <UserList/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserManagement;
