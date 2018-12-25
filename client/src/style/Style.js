export const color = {
  fontColor: '#281c20',
  backgroundColor: '#c9b799',
  homeBackgroundColor: '#8e674e',
  navFontColor: 'whitesmoke',
  hoverColor: 'grey'
};
export const pointer = { cursor: 'pointer' };

export const heartCheckboxStyle = (checked) => ({
  backgroundImage: checked? 'url(/img/heart.png)' : 'url(/img/empty-heart.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  cursor: pointer.cursor
});


//Style of Navigation bar
export const navStyle = {
  color: color.navFontColor,
  backgroundColor: 'black',
  opacity: '0.8',
  padding: '12px',
  position: 'fixed',
  top: '0px',
  width: '100%',
  zIndex: '1',
  display: 'flex',
  alignItems: 'center',
};

export const navList = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '40%',
};

export const logo = {
  backgroundImage: 'url(/img/logo.png)',
  width: '50px',
  height: '40px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  cursor: pointer.cursor,
  ':hover': {
    filter: 'brightness(50%)'
  }
};
export const navTextStyle = {
  color: color.navFontColor,
  cursor: pointer.cursor,
  ':hover': {
    color: color.hoverColor
  }
}
export const navuserLoginStyle = {
  float: 'right',
  marginLeft: 'auto',
  marginRight: '50px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '30%'
};

export const navuserNonloginStyle = {
  float: 'right',
  marginLeft: 'auto',
  marginRight: '20px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '40%'
};
export const logoutButtonStyle = {
  padding: 2,
  cursor: pointer.cursor,
  color:'black',
  backgroundColor: 'whitesmoke',
  textAlign: 'center',
  borderRadius: 3,
  fontSize: '80%'
}
//Style of pages (Menu, Promotions, Staffs, Favorites, Register, Me)
export const pageFont = {
  fontSize: '200%'
};
export const pageStyle = {
  padding: '5px',
  minHeight: '600px',
  fontSize: pageFont.fontSize,
  color: color.fontColor,
  backgroundColor: color.backgroundColor,
  textAlign: 'center'
};

export const pageContainerStyle = {
  margin: 'auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  width: '60%'
};
export const pageItemStyle = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%'
};
export const pageItemImgStyle = {
  width: '200px',
  height: '200px',
  ':hover': { filter: 'brightness(70%)' }
};
export const pageItemNameStyle = {
  margin: 'auto',
  padding: '3px',
  fontSize: '70%'
}

export const selectStyle = {
  container: (styles) => ({...styles, width: 200, margin: '20px 0px 80px 75%'}),
  control: (styles) => ({...styles, cursor: pointer.cursor}),
  option: (styles, { isDisable, isSelected, isFocused }) => ({
    ...styles,
    width: 200,
    backgroundColor: isDisable? null : (isSelected? color.homeBackgroundColor : (isFocused? color.backgroundColor : color.navFontColor)),
    color: color.fontColor,
    cursor: pointer.cursor
  }),
};

//Style of details
export const detailStyle = {
  padding: pageStyle.padding,
  minHeight: pageStyle.minHeight,
  fontSize: pageFont.fontSize,
  color: color.fontColor,
  backgroundColor: color.backgroundColor
};
export const detailTitleStyle = {
  fontSize: '150%',
  marginBottom: 30,
  display: 'flex',
  width: '80%',
  justifyContent: 'space-between'
}
//Style of home page
export const homeStyle = {
  color: color.fontColor,
  fontSize: pageFont.fontSize,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  height: '2400px'
};
export const itemStyle = {
  padding: '30px',
  minHeight: '600px'
}
export const profileImg = {
  backgroundImage: 'url(/img/profile-image.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

export const menuPlateStyle = {
  margin: 'auto',
  padding: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%'
};

export const menuImgStyle = {
  width: '150px',
  height: '150px',
  ':hover': { filter: 'brightness(70%)' }
}

const menuPlateArrowStyle = {
  display: 'inline-block',
  width: '60px',
  height: '60px',
  borderTop: `5px solid ${color.fontColor}`,
  borderRight: `5px solid ${color.fontColor}`,
  ':hover': {
    borderColor: color.hoverColor,
    cursor: pointer.cursor
  }
}

export const menuPlateLeftArrowStyle = {
  ...menuPlateArrowStyle, transform: 'rotate(-135deg)'
}
export const menuPlateRightArrowStyle = {
  ...menuPlateArrowStyle, transform: 'rotate(45deg)'
}
export const menuTitleStyle = {
  color: color.fontColor,
  textDecoration: 'none',
  ':hover': {
    color: color.hoverColor
  }
}
export const dishContainerStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around'
}
export const promoContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}
export const promoIconStyle = {
  fontSize: '150%',
  color: '#281c20',
  textDecoration: 'none',
  ':hover': {
    color: color.hoverColor
  }
}
// Style of Register
export const submitButtonStyle = {
  width: '100px',
  cursor: pointer.cursor,
  borderStyle: 'solid',
  borderColor: color.fontColor,
  borderRadius: '10px',
  backgroundColor: color.backgroundColor,
  fontSize: '80%'
}
export const sheetStyle = {
  backgroundColor: color.homeBackgroundColor,
  width: '50%',
  height: '400px',
  margin: 'auto',
  borderStyle: 'solid',
  borderColor: color.fontColor,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
}