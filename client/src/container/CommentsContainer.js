import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewComment, addRating } from '../actions/commentActions';
import Comments from '../component/Comments';

class CommentsContainer extends Component {

  render() {
    const { loginStatus, commentsContext, commentsId, commentsRating, commentsAuthorId, commentsAuthorName, addCommentMode, ratingToAdd } = this.props;
    const { addNewComment, addRating } = this.props;
    return (
      <Comments
        loginStatus={loginStatus}
        comments={commentsContext}
        commentsId={commentsId}
        ratings={commentsRating}
        authorIds={commentsAuthorId}
        authorNames={commentsAuthorName}
        addNewComment={addNewComment}
        addCommentMode={addCommentMode}
        addRating={addRating}
        ratingToAdd={ratingToAdd}
      />
    );
  }
}

const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
  commentsContext: state.commentsContext,
  commentsId: state.commentsId,
  commentsRating: state.commentsRating,
  commentsAuthorId: state.commentsAuthorId,
  commentsAuthorName: state.commentsAuthorName,
  addCommentMode: state.addCommentMode,
  ratingToAdd: state.ratingToAdd
});
const mapDispatchToProp = dispatch => ({
  addNewComment: () => dispatch(addNewComment()),
  addRating: () => dispatch(addRating())
})

export default connect(mapStateToProp, mapDispatchToProp)(CommentsContainer);