import React, { Component } from 'react';

import PostItem from './PostItem';
import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://i.pravatar.cc/120?u=julioAlcantara1323'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/120?u=diegoFernandes42342'
            },
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum aut amet doloribus nesciunt veniam beatae tempora modi eos enim.'
          },
          {
            id: 2,
            author: {
              name: 'Jõao da Silva',
              avatar: 'https://i.pravatar.cc/120?u=joaoDaSilva42342'
            },
            content:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eius veniam fuga corporis, voluptatem eligendi iste quia assumenda id quasi obcaecati autem possimus doloribus officiis, itaque ipsa sint? Accusamus, vero.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Igor Trindade',
          avatar: 'https://i.pravatar.cc/120?u=igorTrindade9678'
        },
        date: '03 Jun 2019',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum aut amet doloribus nesciunt veniam beatae tempora modi eos enim.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/120?u=diegoFernandes42342'
            },
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum aut amet doloribus nesciunt veniam beatae tempora modi eos enim.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Igor Trindade',
          avatar: 'https://i.pravatar.cc/120?u=igorTrindade9678'
        },
        date: '01 Jun 2019',
        content:
          'Nulla harum aut amet doloribus nesciunt veniam beatae tempora modi eos enim.',
        comments: []
      }
    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
