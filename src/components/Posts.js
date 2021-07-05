import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import {fetchPosts} from './actions/postActions'
import { bindActionCreators } from 'redux'

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }
    render() {
        return (
            <div>
                <h1>
                    Posts
                </h1>
                {this.state.posts.map(post=>(
                   <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                   </div> 
                ))}
            </div>
        )
    }
}
const mapDispatchProps = (dispatch) => bindActionCreators({fetchPosts},dispatch)

export default connect(null,mapDispatchProps)(Posts)
