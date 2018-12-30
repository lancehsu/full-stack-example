import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toAddNewComment, addRating, addContext, cancelComment, toEditComment, modifyComment } from '../actions/commentActions';
import Comments from '../component/Comments';

class CommentsContainer extends Component {

  render() {
    const { loginStatus, myId, commentsContext, commentsId, commentsRating, commentsAuthorId, commentsAuthorName, modifyCommentMode, ratingToAdd, contextToAdd, editedIdx } = this.props;
    const { toAddNewComment, toEditComment, cancelComment, addRating, addContext, modifyComment } = this.props;
    return (
      <Comments
        loginStatus={loginStatus}
        myId={myId}
        comments={commentsContext}
        commentsId={commentsId}
        ratings={commentsRating}
        authorIds={commentsAuthorId}
        authorNames={commentsAuthorName}
        toAddNewComment={toAddNewComment}
        toEditComment={e => toEditComment(e.target.parentElement.parentElement.parentElement.getAttribute('id'))}
        modifyCommentMode={modifyCommentMode}
        addComment={() => modifyComment()}
        editComment={() => modifyComment()}
        editedIdx={editedIdx}
        deleteComment={e => modifyComment(e.target.parentElement.parentElement.parentElement.getAttribute('id'))}
        cancelComment={cancelComment}
        addRating={rating => addRating(rating)}
        ratingToAdd={ratingToAdd}
        addContext={e => addContext(e.target.value)}
        contextToAdd={contextToAdd}
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
  modifyCommentMode: state.modifyCommentMode,
  ratingToAdd: state.ratingToAdd,
  contextToAdd: state.contextToAdd,
  myId: state.myId,
  editedIdx: state.editedIdx
});
const mapDispatchToProp = dispatch => ({
  toAddNewComment: () => dispatch(toAddNewComment()),
  toEditComment: commentId => dispatch(toEditComment(commentId)),
  addRating: rating => dispatch(addRating(rating)),
  addContext: text => dispatch(addContext(text)),
  cancelComment: () => dispatch(cancelComment()),
  modifyComment: commentId => dispatch(modifyComment(commentId)),
});

export default connect(mapStateToProp, mapDispatchToProp)(CommentsContainer);