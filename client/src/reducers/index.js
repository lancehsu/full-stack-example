import { combineReducers } from 'redux';
import { menuData, menuName, menuId, menuImg, menuCategory, menuAmount, options, selectedOption } from './menuReducer';
import { promoData, promoName, promoId, promoImg } from './promotionsReducer'
import { staffData, staffName, staffId, staffImg, staffAbbr } from './staffReducer';
import { detailData, detailId, detailName, detailImg, detailPrice, detailCategory, detailAbbr, detailDescription, detailDesignation, detailComments } from './detailReducer';
import { commentsContext, commentsId, commentsRating, commentsAuthor, commentsAuthorId, commentsAuthorName, modifyCommentMode, ratingToAdd, contextToAdd, editedIdx } from './commentReducer';
import { scrollView, homeScrollTo } from './homeReducer';
import { filledUsername, filledPassword, loginResponse, token, loginStatus, myInfoData, myFirstname, myLastname, myAccount, myId, adminVerification, usersFirstname, usersLastname, usersAccount, usersId, usersAdmin } from './loginReducer';
import { favoriteData, favoriteName, favoriteId, favoriteImg, favoriteCategory, favoriteAmount, favoriteList } from './favoriteReducer';

export default combineReducers({
  homeScrollTo,
  scrollView,

  menuData,
  menuName,
  menuId,
  menuImg,
  menuCategory,
  menuAmount,

  options,
  selectedOption,

  promoData,
  promoName,
  promoId,
  promoImg,

  staffData,
  staffName,
  staffId,
  staffImg,
  staffAbbr,

  detailData,
  detailId,
  detailName,
  detailImg,
  detailCategory,
  detailPrice,
  detailAbbr,
  detailDescription,
  detailDesignation,
  detailComments,

  commentsContext,
  commentsId,
  commentsRating,
  commentsAuthor,
  commentsAuthorId,
  commentsAuthorName,
  modifyCommentMode,
  ratingToAdd,
  contextToAdd,
  editedIdx,

  filledUsername,
  filledPassword,
  loginResponse,
  token,
  loginStatus,
  myInfoData,
  myFirstname,
  myLastname,
  myAccount,
  myId,
  adminVerification,
  usersFirstname,
  usersLastname,
  usersAccount,
  usersId,
  usersAdmin,

  favoriteData,
  favoriteName,
  favoriteId,
  favoriteImg,
  favoriteCategory,
  favoriteAmount,
  favoriteList
});