import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../components/actions/postActions'
import { bindActionCreators } from 'redux'

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value })
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        
        this.props.createPost(post)
        
    }


    render() {
        return (
            <div>
                <h1>
                    Post Form
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title : </label><br/>
                        <input name="title" onChange={this.onChange} value={this.state.title} type="text"/>
                    </div>
                    <div>
                        <label>Body : </label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} type="text"/>
                    </div>
                    <br/>
                    <button  type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

const mapDispatchProps = (dispatch) => bindActionCreators({createPost},dispatch)
const mapStateToProps = state => ({
    posts: state.posts.item
})

export default connect(mapStateToProps,mapDispatchProps)(PostForm)