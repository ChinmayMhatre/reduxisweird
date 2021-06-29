import React, { Component } from 'react'
import axios from 'axios';


class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(data=>{
            console.log(data)
            this.setState({posts : data.data})
        })
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
export default Posts
