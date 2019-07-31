import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

function Comment({ data }) {
  return (
    <div className="comment">
      <img
        src={data.author.avatar}
        alt="avatar do autor do comentario"
        className="comment__avatar"
      />
      <p className="comment__content">
        <b className="comment__name">{data.author.name} </b>
        {data.content}
      </p>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
