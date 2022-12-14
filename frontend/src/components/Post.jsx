import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDistance from 'date-fns/formatDistance';
import default_image from '../logo/default_user.jpg';
import ReactPlayer from "react-player";
import React from "react";
const Post = ({ post, showUsername, fromFavoritePostPage }) => {
  if (!post) {return}
  // Get author image & name
  let authorImage = '';
  let author = '';

  if (showUsername) {
    authorImage = fromFavoritePostPage ?
                    post.post.author && post.post.author.image ?
                      <img src={post.post.author.image} alt = '' className='author-small-image' />
                      :
                      <img src={default_image} alt = '' className='author-small-image' />
                    :
                    post.author && post.author.image?
                    <img src={post.author.image} alt = '' className='author-small-image' />
                      :
                      <img src={default_image} alt = '' className='author-small-image' />;
    author = fromFavoritePostPage ?
              post.post? ` ${post.post.author.firstName} ${post.post.author.lastName} - `:''
              :
              post.author? ` ${post.author.firstName} ${post.author.lastName} - `:'';
  }

  const postId = fromFavoritePostPage ? post.post._id : post._id;
  const title = fromFavoritePostPage ? post.post.title : post.title;
  const image = fromFavoritePostPage ? post.post.image : post.image;

  const postDate = post.updatedAt ? ` Last modified: ${formatDistance(new Date(post.updatedAt), new Date())}` : '';

  return (
    <Card className='mb-2'>
      <Link to={`/postDetail/${postId}`}>
        <div className="banner">
          <ReactPlayer className="w-100" url={post.image} controls />
        </div>
      </Link>

      <Card.Body>
        <Link to={`/postDetail/${postId}`}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>
          {authorImage}
          {author}
          {postDate}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}
// Define proptypes for post, showUsername, fromFavoritePostPage
Post.propTypes = {
  post: PropTypes.object.isRequired,
  showUsername: PropTypes.bool.isRequired,
  fromFavoritePostPage: PropTypes.bool.isRequired,
}

export default Post
