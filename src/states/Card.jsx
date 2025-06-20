import {Component} from "react";

export class CardClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text;

    if (this.props.age > 18) {
      text = <p className='green'>Совершеннолетний</p>
    } else {
      text = <p className='red'>Не совершеннолетний</p>
    }

    return (
      <div className="card">
        <img src={this.props.image} alt=""></img>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age} </p>
        {text}
      </div>
    );
  }
}