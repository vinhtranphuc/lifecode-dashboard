/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {
    Card,
    CardHeader,
    CardBody
  } from "shards-react";
import { Upload, Modal, message } from 'antd';
import { notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

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

class PostImages extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [
      // {
      //   uid: '1',
      //   name: 'image.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
      // {
      //   uid: '2',
      //   name: 'image.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
      // {
      //   uid: '3',
      //   name: 'image.png',
      //   status: 'error',
      // },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  componentWillReceiveProps(nextProps) {
    const {postImages} = nextProps;
    let {fileList} = this.state;
    if(postImages && postImages.length>fileList.length) {
      nextProps.postImages.map((item, index) => {
        let img = {
          uid: index+1,
          name: 'img_'+index+1,
          status: 'saved',
          url: item
        }
        fileList.push(img);
      })
      this.setState({
        fileList: fileList
      })
    }
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList});
    fileList = fileList.map(item => {
      if(!item.response) 
        return item.url;
      return item.response[0]
    });
    this.props.handleGetPostImages(fileList);
  };

  render() {
    let { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
        <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Feature images</h6>
        </CardHeader>
        <CardBody className="p-2">
            <div className="clearfix">
            <ImgCrop rotate={true} modalWidth={900} styleImport={false} aspect={6/4}>
                <Upload
                    name="files"
                    action="http://localhost:8888/api/image/preview"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    beforeUpload={beforeUpload}
                >
                    {fileList.length >= 6 ? null : uploadButton}
                </Upload>
              </ImgCrop>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%', height: '100%' }} src={previewImage} />
                </Modal>
            </div>
        </CardBody>
      </Card>
      
    );
  }
}

export default PostImages;