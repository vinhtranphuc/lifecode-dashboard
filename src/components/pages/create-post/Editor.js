import React from "react";
import { Card, CardBody, Form, FormInput } from "shards-react";

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UploadImgAdapter from './UploadImgAdapter';

import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import {createPost} from "../../../actions/postsAction";

class Editor extends React.Component {

  onChangeTitle (e){
    const title = e.target.value;
    this.props.handleGetTitle(title)
  }

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render () {
    return (
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput size="lg" className="mb-3" placeholder="Your Post Title"  onChange={this.onChangeTitle.bind(this)}/>
            <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onInit={editor => {
                      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                        return new UploadImgAdapter(loader);
                      };
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
          </Form>
        </CardBody>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createPost:createPost},dispatch);
} 

export default connect(null,mapDispatchToProps)(Editor);
