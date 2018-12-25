import { combineReducers } from 'redux';
import { menuData, menuName, menuId, menuImg, menuCategory, menuAmount } from './menuReducer';
import { promoData, promoName, promoId, promoImg } from './promotionsReducer'
import { staffData, staffName, staffId, staffImg, staffAbbr } from './staffReducer';
import { detailData, detailId, detailName, detailImg, detailPrice, detailCategory, detailAbbr, detailDescription, detailDesignation, detailComments } from './detailReducer';
import { commentsContext, commentsId, commentsRating, commentsAuthor, commentsAuthorId, commentsAuthorName, addCommentMode, ratingToAdd } from './commentReducer';
import { options, selectedOption } from './selectReducer';
import { scrollView } from './homeReducer';
import { filledUsername, filledPassword, loginResponse, token, loginStatus, myInfoData, myFirstname, myLastname, myAccount, myId, adminVerification, usersFirstname, usersLastname, usersAccount, usersId, usersAdmin } from './loginReducer';
import { favoriteData, favoriteName, favoriteId, favoriteImg, favoriteCategory, favoriteAmount, favoriteList } from './favoriteReducer';

export default combineReducers({
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
  addCommentMode,
  ratingToAdd,

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