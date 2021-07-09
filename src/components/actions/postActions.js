import { FETCH_POSTS,NEW_POSTS } from '../actions/types'
import axios from 'axios'
export const fetchPosts = () => dispatch => {
  
        console.log("actions")
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(data=>{
            dispatch({
                type:FETCH_POSTS,
                payload:data.data
            })
        })
    
}
export const createPost = (postData) => dispatch => {
  
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }));
    
}
