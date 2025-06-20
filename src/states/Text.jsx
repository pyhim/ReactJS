import React from "react";
import "./Text.css"

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

export class MyDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "light"
    }

    this.change = this.change.bind(this);
  }

  change(event) {
    // alert(event.target.value);

    // if (event.target.value === "light") {
    //   this.setState({class: "dark"});
    // } else {
    //   this.setState({class: "light"});
    // }

    this.setState({class: event.target.value});
  }

  render() {
    return (
      <div className={this.state.class}>
        <div>
          {this.props.styleClasses.map((styleClass) => {
            return (
              <>
                <label htmlFor="theme-input">{styleClass}</label>
                <input name="theme-input" type="radio" value={styleClass} onChange={this.change}/>
              </>
            );
          })}
        </div>
        <Text text={"Hello World"}></Text>
      </div>
    );
  }
}