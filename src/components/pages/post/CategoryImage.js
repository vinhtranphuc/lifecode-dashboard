/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { notification } from 'antd';

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error('Image must smaller than 10MB!');
    notification.warning({
      message: 'Life Code',
      description: 'Image must smaller than 10MB!',
      style:{zIndex:"9999"}
    });
  }
  return isJpgOrPng && isLt2M; 
}

class CategoryImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      base64Img:props.categoryImg
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      base64Img:newProps.categoryImg
    })
  }
    
  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (base64Img) => {
          this.setState({
            base64Img,
            loading: false,
          });
          this.props.handleGetImg(base64Img);
        }
      );
    }
  };

  uploadButton(loading) {
    return (
      <div className="img-category-btn">
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
  }

  handleCloseImg(e) {
    e.stopPropagation();
    this.setState({
      base64Img : ""
    });
  }

  loadImage(base64Img,loading) {
    return base64Img?<>
        <button type="button" onClick={this.handleCloseImg.bind(this)} className="img-close close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <img src={base64Img} alt="avatar" style={{ width: '1920px', height:'480px' }}/></>
    :this.uploadButton(loading)
  }

  render() {
    const { base64Img } = this.state;
    const { loading } = this.state;
    return (
      <>
      <Upload
        name="files"
        listType="picture-card"
        className="category-uploader"
        showUploadList={false}
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        action="http://localhost:8888/api/image/preview"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        children={this.loadImage(base64Img,loading)}
      >
      </Upload>
      </>
    );
  }
}

export default CategoryImage;