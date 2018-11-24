import { React, Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getDish();
  }
  getDish = () => {

  }
  render() {
    return (
      <div class='Person'></div>
    );
  }
}

export default Person;