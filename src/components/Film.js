import React, { Component, PropTypes } from 'react';
import Timestamp from 'react-timestamp';

import CommentArea from './CommentArea';

import '../styles/App.css';

class Film extends Component {

  constructor(props) {
    super(props);

    this.state = {
      heart: this.props.heart
    }
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hearts: PropTypes.number.isRequired,
    heart: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  };


  static defaultProps = {
    heart: false
  };


  renderComments = () => {
    return this.props.comments.map((_comment, idx) => {
      const { username, comment } = _comment;
      return (
       <div className='ml-20' key={idx}>
         <p><b>{username}</b> {comment}</p>
       </div>
      )
    })
  }


  renderCommentArea = () => {
    return <CommentArea heart={this.state.heart} toggleHeart={this.toggleHeart}/>;
  }


  toggleHeart = () => {
    this.setState({ heart: !this.state.heart });
  }


  render() {
    const { username, timestamp, photo, description, hearts } = this.props;

    return (
     <div>
       <div className='wrapper'>
         <div className='flex-wrapper-sb'>
           <div className='flex-wrapper'>
             <div className='avatar'></div>
             <p><b>{username}</b></p>
           </div>
           <p className='light'><Timestamp time={timestamp} /></p>
         </div>
         <div className='post-img'>
           <img role='presentation' src={photo} />
         </div>
         <div className='ml-20'>
           <p><b>{hearts} likes</b></p>
         </div>
         <div className='ml-20'>
           <p><b>{username}</b> {description}</p>
         </div>
         {this.renderComments()}
         {this.renderCommentArea()}
       </div>
     </div>
    );
  }
}

export default Film;
