import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }
  componentDidMount(){
    this.props.onLoadingChange();
    Axios.get('/api/post/')
      .then(response => {
        return response.data;
      })
      .then(posts => {
        this.setState({posts});
      })
      .finally(() => {
        this.props.onLoadingChange();
      });
  }
  render() {
    const { posts } = this.state;

    const postsList = posts.map(post => {
      return (
        <article key={post.id} className="post-item">
          <Link to={`/post/${post.id}`}>
            <img src={post.thumbnail_url} alt={post.title}  />
          </Link>
        </article>

      );
    });

    return (
      <main className='post-container'>
        {postsList}
      </main>
    );

  }
}
Posts.propTypes = {
  onLoadingChange: PropTypes.func.isRequired,
};

export default Posts;
