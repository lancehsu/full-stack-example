import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
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
      <div className='Detail'>
        <div className='profile'>
          <div className='info'>
            <div className='name'>{name}</div>
            {type === 'staffs' && <div className='designation'>{designation}</div>}
            {type === 'menu' && <div className='category'> Category: {category}</div>}
            {(type === 'menu' || type === 'promotions') && <div className='price'>Price: {`$${price/100}`}</div>}
            <div className='description'>{description}</div>
          </div>
          {/* GET src='(menu || promotions || staffs)/images/...' */}
          <div className='img-container'><img className='img' src={`../${img}`} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' /></div>
        </div>
        {type === 'menu' && (
          <div className='comments-container'>
            {comment.map((e, i) => (
              <div className='comment' key={[i]} author-id={authorId[i]}>
                <div className='rating'>{rating[i]}</div>
                <div className='context'>{e}</div>
                <div className='authorName'>{authorName[i]}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Detail;