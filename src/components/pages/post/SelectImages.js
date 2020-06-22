import React, { Component } from 'react';
import { Upload,Button } from 'antd';
import { UploadOutlined  } from '@ant-design/icons';
import ImageGallery from 'react-image-gallery';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUriImages } from '../../../actions/imagesAction';
import "react-image-gallery/styles/css/image-gallery.css";

class SelectImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.uriImages.map(url => {
            this.state.images.push({
                original:url,
                thumbnail:url
            })
        });
    }
    componentDidMount() {
        const param = {
            post_id: '',
            start_img: 1,
            to_img: 100
        }
        this.props.getUriImages(param);
    }

    handleThumbnailClick = (e) => {
        debugger
    }

    render() {
        return (
            <>
                <div className="d-flex border-0 pb-4">
                    <ImageGallery onThumbnailClick={this.handleThumbnailClick}
                            onTouchStart={this.onTouchStart}
                            sizes={10} 
                            items={this.state.images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            infinite={false}
                            showIndex={true}
                            thumbnailPosition='left'
                            slideOnThumbnailOver={true} />
                </div>
                <div className="d-flex border-0 pb-2">
                    <Upload className="ml-2"
                        name="files"
                        action="http://localhost:8888/api/image/preview"
                        listType="picture-card"
                        // fileList={fileList}
                        // onPreview={this.handlePreview}
                        // onChange={this.handleChange}
                        // beforeUpload={beforeUpload}
                    >
                         <UploadOutlined  style={{ fontSize: '55px'}} />
                    </Upload>
                </div>
                <div className="d-flex pl-1 border-0">
                    <Button success onClick={() => console.log(this.state.image)}>
                        OK
                    </Button>
                </div>
            </>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        uriImages: state.uriImages
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUriImages: getUriImages }, dispatch);
}

export default connect(mapSateToProps, mapDispatchToProps)(SelectImages);