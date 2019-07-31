import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import './PostItem.css';

function PostItem({ data }) {
  return (
    <div className="post-item">
      <header className="post-item__header">
        <img src={data.author.avatar} className="post-item__avatar" />
        <div>
          <div className="post-item__name">{data.author.name}</div>
          <div className="post-item__date">{data.date}</div>
        </div>
      </header>
      <div className="post-item__content">{data.content}</div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

PostItem.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default PostItem;
