import { Component } from 'react';
export default class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultPros = {
    images: [`http://pets-v2.dev-apis.com/pets/none.jpg`],
  };
  handleIndexClick = (e) => {
    this.setState({ active: +e.target.dataset.index });
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal"></img>
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              src={image}
              key={image}
              className={index == active ? 'active' : ''}
              alt="animal thumpn"
              onClick={this.handleIndexClick}
              data-index={index}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
