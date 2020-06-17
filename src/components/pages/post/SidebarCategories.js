/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import PropTypes from "prop-types";
import { notification } from 'antd';

import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormRadio,
  FormInput
} from "shards-react";
import { Popconfirm,Modal,Upload,message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CategoryImage from "./CategoryImage";

import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import {checkExistsCategory,addCategory,removeCategory,getCategories} from "../../../actions/categoriesAction";
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
class SidebarCategories extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      category: "",
      categoryImg: "",
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
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  handleSelectCategory(e) {
    let categoryId = e.currentTarget.getAttribute('categoryid');
    this.props.handleGetCategory(categoryId);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  loadCategories = (categories) => {
    let result = [];
    for(let i=0;i<categories.length;i++) {
      if(((i+1)%2) !== 0) {
        result.push(
          <div key={i} className="row">
            {<div className="col-md-6">
            <FormRadio checked={this.props.categoryId === categories[i].category_id} onClick={this.handleSelectCategory} key={categories[i].category_id} categoryid = {categories[i].category_id} className="mb-1" value="design" name="category">
              {categories[i].category}
            </FormRadio>
            </div>}
            {(i+1)<categories.length&&<div className="col-md-6">
            <FormRadio checked={this.props.categoryId === categories[i+1].category_id} onClick={this.handleSelectCategory} key={categories[i+1].category_id} categoryid = {categories[i+1].category_id} className="mb-1" value="design" name="category">
              {categories[i+1].category}
            </FormRadio>
            </div>}
          </div>
        )
      }
    }
    return result;
  }

  showModal = () => {
    
    if(!this.state.category || this.state.category === "") {
      notification.warning({
        message: 'Life Code',
        description: 'Please input category name first !'
      });
      return;
    }

    const {category} = this.state;
    this.props.checkExistsCategory(category).then((result) => {
      if(result.data === true) {
        notification.warning({
          message: 'Life Code',
          description: "Category "+category+" already exists !",
        });
        return;
      }
      this.inputElement.click();
    }).catch(function (error) {
      notification.warning({
        message: 'Life Code',
        description: error.response.data.message
      }); 
      return;
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleGetImg(base64Img) {
    this.setState({
      categoryImg: base64Img
    })
  };

  handleAddCategory = e => {
    const categoryPrm = {
      category: this.state.category,
      categoryImg: this.state.categoryImg
    }

    this.props.addCategory(categoryPrm).then((result) => {
        this.setState({
          visible: false,
        });

        notification.success({
          message: 'Life Code',
          description: result.data.message,
        });
        this.props.getCategories();

        this.setState({
          categoryImg:"",
          category:""
        })
      }).catch(function (error) {
        notification.warning({
          message: 'Life Code',
          description: error.response.data.message
        }); 
      });
  };

   handleRemoveCategory = async (e) => {
    const categoryPrm = this.props.categoryId;
    await this.props.removeCategory(categoryPrm).then((result) => {
        if(result.data.status === 200) {
          notification.success({
            message: 'Life Code',
            description: result.data.message
            });
            this.props.getCategories();
          return;
        }

        if(result.data.status === 409) {
          notification.warning({
            message: 'Life Code',
            description: result.data.message
          });
          return;
        }
    }).catch(function (error) {
      notification.warning({
        message: 'Life Code',
        description: error.response.data.message
      }); 
   });
   this.props.handleGetCategory("");
  }

  handleUpdateCatetory(e) {
    this.setState({
      category: e.target.value
    });
  }

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
  handleChange = ({ fileList }) => {
    this.setState({ fileList});
    fileList = fileList.map(item => {
      if(!item.response) 
        return item.url;
      return item.response[0]
    });
    // show modal
    this.setState({
      categoryImg: fileList[fileList.length-1],
      visible: true,
    });
  };

  render() {
    let { previewVisible, previewImage, fileList, previewTitle } = this.state;

    return(
      <div>
        <Card small className="mb-3">
          <CardHeader className="border-bottom">
            <h6 className="m-0">{this.props.title}</h6>
          </CardHeader>
          <CardBody className="p-0">
            <ListGroup flush>
              <ListGroupItem className="px-3 pb-2">
                {this.loadCategories(this.props.categories)}
              </ListGroupItem>
              <ListGroupItem className="d-flex px-3">
                <InputGroup className="ml-auto">
                  <Popconfirm
                    placement="left"
                    title={"Are you sure to remove this category?"}
                    onConfirm={this.handleRemoveCategory}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button outline style={{display:this.props.categoryId===""?"none":"block"}} theme="danger" className="mr-2" size="sm">
                      <i className="material-icons">delete</i>Delete
                    </Button>
                  </Popconfirm>
                  <FormInput onChange={this.handleUpdateCatetory.bind(this)} value={this.state.category} placeholder="new category" />
                  <InputGroupAddon type="append">
                    <Button theme="white" className="px-2" onClick = {this.showModal}>
                      <i className="material-icons">add</i>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
        <ImgCrop rotate={true} modalWidth={900} styleImport={false} aspect={8/3}>
            <Upload
                name="files"
                action="http://localhost:8888/api/image/preview"
                listType="picture-card"
                // fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                beforeUpload={beforeUpload}
            >
                {fileList.length >= 6 ? null : <PlusOutlined ref={input => this.inputElement = input}/>}
            </Upload>
        </ImgCrop>
        <Modal zIndex={9999} closable={false} 
          className="img-category-modal"
          visible={this.state.visible} onOk={this.handleOk}
          onCancel={this.handleCancel} 
          onOk={this.handleAddCategory}
          width="fit-content"
          maxWidth={1920}
          maxHeight={720}>
            <CategoryImage handleGetImg={this.handleGetImg.bind(this)} categoryImg={this.state.categoryImg}/>
        </Modal>
      </div>
    );
  }
}

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

const mapStateToProps = (state) => {
  return ({
      categories: state.categories
    })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkExistsCategory:checkExistsCategory,addCategory:addCategory,removeCategory:removeCategory,getCategories:getCategories},dispatch);
} 

export default connect(mapStateToProps,mapDispatchToProps)(SidebarCategories);