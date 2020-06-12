import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactAvatarEditor from 'react-avatar-editor';

import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";

class UserDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: require("./../../../images/avatars/vinh.jpg"),
      allowZoomOut: false,
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 0,
      preview: null,
      width: 200,
      height: 200,
    }
  }
  handleNewImage = e => {
    this.setState({ image: e.target.files[0] })
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  handlePositionChange = position => {
    this.setState({ position })
  }

  handleSelectImg = (e) => {
    this.inputElement.click();
  }

  render() {
    const { userDetails } = this.props;
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <div>
              <ReactAvatarEditor
                scale={parseFloat(this.state.scale)}
                width={this.state.width}
                height={this.state.height}
                position={this.state.position}
                onPositionChange={this.handlePositionChange}
                rotate={parseFloat(this.state.rotate)}
                borderRadius={this.state.width / (100 / this.state.borderRadius)}
                image={this.state.image}
                className="editor-canvas rounded-circle"
              />
            </div>
            <input hidden ref={input => this.inputElement = input} name="newImage" type="file" onChange={this.handleNewImage} />
            <input className="progress-sm"
              name="scale"
              type="range"
              onChange={this.handleScale}
              min={this.state.allowZoomOut ? '0.1' : '1'}
              max="2"
              step="0.01"
              defaultValue="1"
            />
          </div>
          <h4 className="mb-0">{userDetails.name}</h4>
          <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
          <Button onClick={this.handleSelectImg} pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">attach_file</i>Change Avatar
          </Button>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {userDetails.metaTitle}
            </strong>
            <span>{userDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Tran Phuc Vinh",
    jobTitle: "XXXX",
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserDetails;
