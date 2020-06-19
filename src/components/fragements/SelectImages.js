import React, { Component } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUriImages } from './../../actions/imagesAction';

class SelectImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }
        this.onPick = this.onPick.bind(this)
    }

    componentDidMount() {
        this.props.getUriImages();
    }
    onPick(image) {
        this.setState({ image })
    }

    render() {
        return (
            <>
                <ImagePicker maxHeight={this.props.maxHeight}
                    images={this.props.uriImages.map((url, i) => ({ src: url, value: i }))}
                    onPick={this.onPick}
                />
                <button type="button" onClick={() => console.log(this.state.image)}>OK</button>
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