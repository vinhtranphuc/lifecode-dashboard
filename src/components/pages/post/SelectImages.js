import React, { Component } from 'react';
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
        this.handleSelectImage = this.handleSelectImage.bind(this);
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
            to_img: ''
        }
        this.props.getUriImages(param);
    }

    handleSelectImage (e){
        const uriImg = (e.currentTarget.childNodes[0].children[0].src)?(e.currentTarget.childNodes[0].children[0].src):'';
        this.props.handleGetImageSelected(uriImg);
    }

    render() {
        return (
            <>
                <div className="d-flex border-0 pb-4">
                    <ImageGallery onClick={this.handleSelectImage}
                            onTouchStart={this.onTouchStart}
                            sizes={10} 
                            items={this.state.images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            infinite={true}
                            showIndex={true}
                            thumbnailPosition='left'
                            slideOnThumbnailOver={true} />
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