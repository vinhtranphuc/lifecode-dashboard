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
import SelectImages from "./SelectImages";

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

async function resizeImage(base64Str, maxWidth, maxHeight) {
   return new Promise((resolve) => {
    let img = new Image()
    img.src = base64Str
    img.onload = () => {
      let canvas = document.createElement('canvas')
      const MAX_WIDTH = maxWidth
      const MAX_HEIGHT = maxHeight
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL())
    }
  });
}

class PostImages extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    selectImgVisible:true,
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

  handleCancelPreview = () => this.setState({ previewVisible: false });
  handleCancelSelect = () => this.setState({ selectImgVisible: false });
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

  handleChange = async ({ fileList }) => {
    this.setState({ fileList});
    fileList = fileList.map(item => {
      if(!item.response) 
        return item.url;
      return item.response[0];
    });
    for(let i=0;i<fileList.length;i++) {
      if(fileList[i] && fileList[i].startsWith('data:')) {
        let result = "";
        await resizeImage(fileList[i],700,467).then(data => {
          result = data;
        }).catch(error => {
          console.log(error);
        })
        fileList[i] = result;
      }
    }
    this.props.handleGetPostImages(fileList);
  };

  render() {
    let { previewVisible, previewImage, fileList, previewTitle,selectImgVisible } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
        <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Avatar images</h6>
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
                    onCancel={this.handleCancelPreview}
                >
                    <img alt="example" style={{ width: '100%', height: '100%' }} src={previewImage} />
                </Modal>
                <Modal
                    width={1000}
                    visible={selectImgVisible}
                    title={'Choose images'}
                    footer={null}
                    onCancel={this.handleCancelSelect}
                >
                    <SelectImages/>
                </Modal>
            </div>
        </CardBody>
      </Card>
      
    );
  }
}

export default PostImages;