import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player'
import {Card} from "react-bootstrap";

const ImageSlideShow = ({ posts }) => {
  const imageList = posts.filter(post => post.image);
  return (

        <Carousel>
          {imageList.map((image) =>
            <Carousel.Item key = {image._id}>
              <Link to={`/postDetail/${image._id}`}>
                  <ReactPlayer className="w-100" url={image.image} controls />
                <Carousel.Caption>
                  <h3>{image.title}</h3>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          )}
        </Carousel>

  )
}

ImageSlideShow.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ImageSlideShow
