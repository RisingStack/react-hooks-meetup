import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontSize: 10 };
    this.handleFontSizeIncrease = this.handleFontSizeIncrease.bind(this);
  }

  handleFontSizeIncrease() {
    this.setState({
      fontSize: this.state.fontSize + 3
    })
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleFontSizeIncrease}
        >
          Increase hello size
        </button>
        <p style={{ fontSize: `${this.state.fontSize}px` }}>
          Hello, {this.props.name}
        </p>
      </>
    );
  }
}

export default App;
