/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  FormRadio
} from "shards-react";

class SidebarActions extends React.Component {

  constructor() {
    super();
    this.onChangeLevel = this.onChangeLevel.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  onChangeLevel(e) {
    let level = e.currentTarget.getAttribute('level');
    this.props.handleGetLevel(level)
  }
  render() {
    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{this.props.title}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <span className="d-flex mb-2 level">
                <i className="material-icons mr-1">flag</i>
                <strong className="mr-1">Level:</strong>
                <FormRadio checked={parseInt(this.props.level)===1} onChange={this.onChangeLevel} className="mb-1" value="design" name="level" level='1'>1</FormRadio>
                <FormRadio checked={parseInt(this.props.level)===2} onChange={this.onChangeLevel} className="mb-1" value="design" name="level" level='2'>2</FormRadio>
                <FormRadio checked={parseInt(this.props.level)===3} onChange={this.onChangeLevel} className="mb-1" value="design" name="level" level='3'>3</FormRadio>
                <FormRadio checked={parseInt(this.props.level)===4} onChange={this.onChangeLevel} className="mb-1" value="design" name="level" level='4'>4</FormRadio>
                <FormRadio checked={parseInt(this.props.level)===5} onChange={this.onChangeLevel} className="mb-1" value="design" name="level" level='5'>5</FormRadio>
              </span>
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Visibility:</strong>{" "}
                <strong className={parseInt(this.props.level)===5?'text-danger':'text-success'}>{parseInt(this.props.level)===5?'Draft':'Public'}</strong>{" "}
              </span>
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">calendar_today</i>
                <strong className="mr-1">Created At:</strong> Not Yet{" "}
              </span>
            </ListGroupItem>
            <ListGroupItem className="d-flex px-3 border-0" style={{paddingTop:0}}>
              <Button onClick={this.props.handleSave} outline theme="accent" size="sm" style = {{width: '40%', marginLeft: '33%'}}>
                <i className="material-icons">{this.props.isSaved?'edit':'save'}</i>{this.props.isSaved?' EDIT POST':' CREATE NEW POST'}
              </Button>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
    </Card>
    )
  }
}
SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Actions"
};

export default SidebarActions;

