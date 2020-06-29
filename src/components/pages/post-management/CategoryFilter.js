import React, { Component } from "react";
import { FormSelect } from "shards-react";
import { Row} from "shards-react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from '../../../actions/categoriesAction';

class CategoryFilter extends Component {

    componentDidMount() {
        this.props.getCategories();
    }
    loadCategories(categories) {
        let list = [];
        categories&&categories.forEach((e,i) => {
            list.push(<option key={i} value={e.category_id}>{e.category}</option>)
        });
        return list;
    }

    handleChangeCategory = e => {
        const categoryId = e.target.value;
        this.props.handleFilterCategory&&this.props.handleFilterCategory(categoryId);
    }
    render() {
        // onChange = {this.handleChangeCategory.bind(this)}
        return (
            <Row className="pl-3 pr-3">
                <FormSelect size="sm" onChange = {this.handleChangeCategory.bind(this)}>
                    <option value="">all</option>
                    {this.loadCategories(this.props.categories)}
                </FormSelect>
            </Row>
        );
    }
}
const mapSateToProps = (state) => {
    return {
        categories: state.categories
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCategories: getCategories }, dispatch);
  }
  
  export default connect(mapSateToProps, mapDispatchToProps)(CategoryFilter);