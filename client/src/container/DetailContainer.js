import React, { Component } from 'react';
import Detail from '../component/Detail';

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '', name: '', designation: '',
      img: '', fallbackImg: '', description: '',
      price: '', comment: [], rating: [], author: [], authorId: []
    };
  }
  componentDidMount() {
    this.getDetail();
  }
  getDetail = async () => {
    let path = this.props.location.pathname;
    let type;
    if (path.includes('menu')) {
      path = path.replace('menu', 'dishes');
      type = 'menu';
    } else if (path.includes('staffs')) {
      path = path.replace('staffs', 'leaders');
      type = 'staffs';
    } else {
      type = 'promotions';
    }

    const detail = await fetch(path);
    const data = await detail.json();

    const { name } = data;
    const { image } = data;
    const { description } = data;

    if (type === 'menu') {
      const { price } = data;
      const { category } = data;
      // get comment properties
      const { comments } = data;
      const comment = comments.map(e => e.comment);
      const rating = comments.map(e => e.rating);
      const authorName = comments.map(e => `${e.author.firstname} ${e.author.lastname}`);
      const authorId = comments.map(e => e.author.id);

      this.setState({
        type,
        name,
        img: image,
        fallbackImg: '/images/empty-dish.jpg',
        description,
        price,
        category,
        comment,
        rating,
        authorName,
        authorId
      });
    } else if (type === 'staffs') {
      const { designation } = data;
      this.setState({
        type,
        name,
        img: image,
        fallbackImg: '/images/empty-staff.jpg',
        description,
        designation
      });
    } else {
      const { price } = data;
      this.setState({
        type,
        name,
        img: image,
        fallbackImg: '/images/promotions-icon.jpg',
        price,
        description
      })
    }
  }

  render() {
    const { type, name, designation, img, fallbackImg, description, price, category, comment, rating, authorName, authorId } = this.state;
    return (
      <Detail
        type={type}
        name={name}
        designation={designation}
        img={img}
        fallbackImg={fallbackImg}
        description={description}
        price={price}
        category={category}
        comment={comment}
        rating={rating}
        authorName={authorName}
        authorId={authorId}
         />
    );
  }
}

export default DetailContainer;