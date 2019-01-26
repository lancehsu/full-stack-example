import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu, getMenuName, getMenuId, getMenuImg, getMenuCategory, getMenuAmount, addOptions, selectOnChange } from '../actions/menuActions';
import { modifyFavorite } from '../actions/favoritelistActions';
import Menu from '../component/Menu';

class MenuContainer extends Component {

  componentDidMount() {
    this.getMenu();
  }
  getMenu = async () => {
    try {
      const { fetchMenu, getMenuName, getMenuId, getMenuImg, getMenuCategory, getMenuAmount, addOptions, selectOnChange } = this.props;
      await fetchMenu();
      getMenuName();
      getMenuId();
      getMenuImg();
      getMenuCategory();
      getMenuAmount();

      const { amount, categories } = this.props;
      // array of select list element
      const optionsArray = ['All'].concat(categories.filter((e, i) => categories.indexOf(e) === i));
      let initOption = null;
      const options = optionsArray.map((option, i) => {
        let filteredIdx = [];
        if (option === 'All') {
          filteredIdx = [...new Array(amount)];
          filteredIdx = filteredIdx.map((e, i) => i);
          initOption = { value: filteredIdx, label: 'All' };
        } else {
          categories.forEach((e, i) => e === option && filteredIdx.push(i));
        }
        return { value: filteredIdx, label: option };
      });

      addOptions(options);
      selectOnChange(initOption);
    } catch (err) {
      console.error(this.props.fetchMenuFailed || err);
    }
  }

  render() {
    const { names, ids, imgs, selectedOption, options, loginStatus, favoriteList } = this.props;
    const { selectOnChange, modifyFavorite } = this.props;
    const checkedList = favoriteList.map(e => e.liked);


    return (
      <Menu
        loginStatus={loginStatus}
        checked={checkedList}
        ids={ids}
        names={names}
        options={options}
        selectedOption={selectedOption}
        handleChange={e => selectOnChange(e)}
        imgs={imgs}
        favoriteClick={e => modifyFavorite(e.target.id)}
      />
    );
  }
}

const mapStateToProp = state => {
  return {
    loginStatus: state.loginStatus,
    names: state.menuName,
    ids: state.menuId,
    imgs: state.menuImg,
    categories: state.menuCategory,
    amount: state.menuAmount,
    options: state.options,
    selectedOption: state.selectedOption,
    favoriteList: state.favoriteList
  }
};

const mapDispatchToProp = dispatch => ({
  fetchMenu: () => dispatch(fetchMenu()),
  getMenuName: () => dispatch(getMenuName()),
  getMenuId: () => dispatch(getMenuId()),
  getMenuImg: () => dispatch(getMenuImg()),
  getMenuCategory: () => dispatch(getMenuCategory()),
  getMenuAmount: () => dispatch(getMenuAmount()),
  addOptions: options => dispatch(addOptions(options)),
  selectOnChange: optionValue => dispatch(selectOnChange(optionValue)),
  modifyFavorite: dishId => dispatch(modifyFavorite(dishId)),
});

export default connect(mapStateToProp, mapDispatchToProp)(MenuContainer);