import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../../fragements/PageTitle";
import Colors from "./Colors";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import ToggleButtons from "./ToggleButtons";
import SmallButtons from "./SmallButtons";
import SmallOutlineButtons from "./SmallOutlineButtons";
import NormalButtons from "./NormalButtons";
import NormalOutlineButtons from "./NormalOutlineButtons";
import Forms from "./Forms";
import FormValidation from "./FormValidation";
import CompleteFormExample from "./CompleteFormExample";
import Sliders from "./Sliders";
import ProgressBars from "./ProgressBars";
import ButtonGroups from "./ButtonGroups";
import InputGroups from "./InputGroups";
import SeamlessInputGroups from "./SeamlessInputGroups";
import CustomFileUpload from "./CustomFileUpload";
import DropdownInputGroups from "./DropdownInputGroups";
import CustomSelect from "./CustomSelect";

const ComponentsOverview = () => (
  <div>
    <Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
      </Alert>
    </Container>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Forms & Components"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      <Colors />

      <Row>
        <Col lg="8" className="mb-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Inputs</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="p-0 px-3 pt-3">
                <Row>
                  <Checkboxes />
                  <RadioButtons />
                  <ToggleButtons />
                </Row>
              </ListGroupItem>

              <ListGroupItem className="p-3">
                <strong className="text-muted d-block my-2">
                  Small Buttons
                </strong>
                <SmallButtons />

                <strong className="text-muted d-block my-2">
                  Small Outline Button
                </strong>
                <SmallOutlineButtons />
              </ListGroupItem>

              <ListGroupItem className="p-3">
                {/* Normal Buttons */}
                <strong className="text-muted d-block my-2">
                  Normal Buttons
                </strong>
                <NormalButtons />

                {/* Normal Outline Buttons */}
                <strong className="text-muted d-block my-2">
                  Normal Outline Buttons
                </strong>
                <NormalOutlineButtons />
              </ListGroupItem>

              {/* Forms & Form Validation */}
              <ListGroupItem className="p-3">
                <Row>
                  <Forms />
                  <FormValidation />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <CompleteFormExample />
          </Card>
        </Col>

        <Col lg="4" className="mb-4">
          {/* Sliders & Progress Bars */}
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Sliders & Progress Bars</h6>
            </CardHeader>
            <ListGroup flush>
              <ProgressBars />
              <Sliders />
            </ListGroup>
          </Card>

          {/* Groups */}
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Groups</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <Form>
                  <strong className="text-muted d-block mb-3">
                    Button Groups
                  </strong>
                  <ButtonGroups />

                  <strong className="text-muted d-block mb-2">
                    Input Groups
                  </strong>
                  <InputGroups />

                  <strong className="text-muted d-block mb-2">
                    Seamless Input Groups
                  </strong>
                  <SeamlessInputGroups />
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Card>

          <Card small>
            {/* Files & Dropdowns */}
            <CardHeader className="border-bottom">
              <h6 className="m-0">Files & Dropdowns</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <strong className="text-muted d-block mb-2">
                  Custom File Upload
                </strong>
                <CustomFileUpload />

                <strong className="text-muted d-block mb-2">
                  Dropdown Input Groups
                </strong>
                <DropdownInputGroups />

                <strong className="text-muted d-block mb-2">
                  Custom Select
                </strong>
                <CustomSelect />
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ComponentsOverview;
