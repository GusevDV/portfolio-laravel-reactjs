import React, { Component } from 'react';
import Axios from 'axios';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    Axios.get('/api/post/')
      .then(response => {
        return response.data;
      })
      .then(posts => {
        this.setState({posts});
      })

  }

  render() {
    const { posts } = this.state;
    const postsList = posts.map(post => {
      return (
        <article key={post.id} className="post-item">
          <img src={post.thumbnail_url} alt={post.title}  />
        </article>
      );
    });
    console.log(postsList)

    return (
      <main className='post-container'>
        {postsList}
      </main>
    );


  }
}

export default Posts;
