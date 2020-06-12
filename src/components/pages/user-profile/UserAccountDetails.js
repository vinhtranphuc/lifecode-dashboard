import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* Full Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Full Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="Sierra"
                    onChange={() => {}}
                  />
                </Col>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="vinhtranphuc@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
              </Row>
              <Row form>
                {/* User Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feUsername">User Name</label>
                  <FormInput
                    type="username"
                    id="feUsername"
                    placeholder="user name"
                    value=""
                    onChange={() => {}}
                    autoComplete="username"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="1234 Main St."
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCountry">Country</label>
                  <FormInput
                    id="feCountry"
                    placeholder="Country"
                    onChange={() => {}}
                  />
                </Col>
                {/* Phone */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePhone">Phone</label>
                  <FormInput
                    id="fePhone"
                    placeholder="Phone"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Facebook */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFacebook">Facebook</label>
                  <FormInput
                    id="feFacebook"
                    placeholder="Facebook"
                    onChange={() => {}}
                  />
                </Col>
                {/* Twitter */}
                <Col md="6" className="form-group">
                  <label htmlFor="feTwitter">Twitter</label>
                  <FormInput
                    id="feTwitter"
                    placeholder="Twitter"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Instagram */}
                <Col md="6" className="form-group">
                  <label htmlFor="feInstagram">Instagram</label>
                  <FormInput
                    id="feInstagram"
                    placeholder="Instagram"
                    onChange={() => {}}
                  />
                </Col>
                {/* Linkedin */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLinkedin">Linkedin</label>
                  <FormInput
                    id="feLinkedin"
                    placeholder="Linkedin"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
