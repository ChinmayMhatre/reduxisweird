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
