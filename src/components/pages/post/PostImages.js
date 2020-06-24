/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  InputGroupAddon,
  Button as ButtonSR
} from "shards-react";
import { Upload, Modal, message } from 'antd';
import { notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
      style: { zIndex: "9999" }
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
    isLoadImg:false
  };

  handleCancelPreview = () => this.setState({ previewVisible: false });
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
    const { postImages } = nextProps;
    let { fileList } = this.state;
    if (postImages && postImages.length > fileList.length) {
      nextProps.postImages.map((item, index) => {
        let img = {
          uid: index + 1,
          name: 'img_' + index + 1,
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
    this.setState({ fileList });
    fileList = fileList.map(item => {
      if (!item.response)
        return item.url;
      return item.response[0];
    });
    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i] && fileList[i].startsWith('data:')) {
        let result = "";
        await resizeImage(fileList[i], 740, 492.63).then(data => {
          result = data;
        }).catch(error => {
          console.log(error);
        })
        fileList[i] = result;
      }
    }
    this.props.handleGetPostImages(fileList);
  };

  handleGetImageSelected(uriImg) {
    let { fileList } = this.state;
    if (fileList.length >= 10)
      return;

    let uriList = fileList.filter(e=>e.url).map(e => e.url);
    if (uriList.includes(uriImg))
      return;

    const index = fileList.length + 1;
    let img = {
      uid: index,
      name: 'img_' + index,
      status: 'saved',
      url: uriImg
    }
    fileList.push(img);

    this.setState({
      fileList: fileList
    });
    fileList = fileList.map(item => {
      if (!item.response)
        return item.url;
      return item.response[0];
    });
    this.props.handleGetPostImages(fileList);
  }

  handleLoadImages() {
    this.setState({
      isLoadImg:true
    })
  }
  render() {
    let { isLoadImg,previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <UploadOutlined style={{ fontSize: '20px' }} />
        <div className="ant-upload-text">upload</div>
      </div>
    );
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0 ml-2">Avatar images</h6>
        </CardHeader>
        <CardBody className="p-2">
          <div className="clearfix">
            <ImgCrop rotate={true} modalWidth={900} styleImport={false} aspect={3 / 2}>
              <Upload
                name="files"
                action="http://localhost:8888/api/image/preview"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                beforeUpload={beforeUpload}
              >
                {fileList.length >= 10 ? null : uploadButton}
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
          </div>
        </CardBody>
        <CardHeader className="border-top">
          <InputGroupAddon type="append">
            {isLoadImg&&<h6 className="m-0 ml-2 mr-2">Select images</h6>}
            {!isLoadImg&&<ButtonSR onClick={this.handleLoadImages.bind(this)} theme="white" className="px-2">
              Load available images
            </ButtonSR>}
          </InputGroupAddon>
        </CardHeader>
        {isLoadImg&&
          <CardBody className="p-2">
          <SelectImages handleGetImageSelected={this.handleGetImageSelected.bind(this)} />
          </CardBody>}
      </Card>

    );
  }
}

export default PostImages;