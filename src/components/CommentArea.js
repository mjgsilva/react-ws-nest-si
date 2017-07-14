import React, { Component, PropTypes } from 'react';

class CommentArea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }


  static propTypes = {
    heart:       PropTypes.bool.isRequired,
    toggleHeart: PropTypes.func.isRequired
  }


  handleTextChange = (ev) => {
    this.setState({ comment: ev.target.value })
  }


  render() {
    const heart = this.props.heart ? 'like like-on' : 'like like-off';

    return (
      <div>
        <span className='line'></span>
        <div className='flex-wrapper-sb'>
          <div className='flex-wrapper flex-grow mr-1'>
            <div className={`${heart}`} onClick={this.props.toggleHeart}></div>
            <input type='text' className='light flex-grow' placeholder='Adiciona um comentário...' value={this.state.comment} onChange={this.handleTextChange}/>
            </div>
          <div className='dots'></div>
        </div>
      </div>
    );
  }

}

export default CommentArea;
