import React, { Component } from 'react'

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>
                    Post Form
                </h1>
                <form>
                    <div>
                        <label>Title : </label><br/>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Body : </label><br/>
                        <textarea type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm