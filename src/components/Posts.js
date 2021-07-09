import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from './actions/postActions'
import { bindActionCreators } from 'redux'

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(
                nextProps.newPost
            )
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Posts
                </h1>
                {this.props.posts.map(post=>(
                   <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                   </div> 
                ))}
            </div>
        )
    }
}

Posts.protoType = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapDispatchProps = (dispatch) => bindActionCreators({fetchPosts},dispatch)
const mapStateToProps = state => ({
    posts   : state.posts.items,
    newPost : state.posts.item 
})
export default connect(mapStateToProps,mapDispatchProps)(Posts)
