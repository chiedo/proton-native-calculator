import React, { Component } from 'react'; // import from react

import { render, Window, App, Text, Button, Box, Dialog} from 'proton-native'; // import the proton-native components

let displayDefault = "";

class Example extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: displayDefault,
    };
    
    this._clearAll = this._clearAll.bind(this);
    this._appendToCalc = this._appendToCalc.bind(this);
    this._calculate = this._calculate.bind(this);
  }

  _clearAll() {
    this.setState({display: displayDefault});
  }

  _appendToCalc(value){
    let newDisplay;

    if(this.state.display === displayDefault) {
      newDisplay = value;
    } else {
      newDisplay = this.state.display + value;
    }

    this.setState({display: newDisplay});
  }

  _calculate(){
    try {
      let calculation = eval(this.state.display);
      this.setState({display: calculation});
    } catch (err) {
      Dialog("You entered an ill-formated equation. Please start over");
      this.setState({display: displayDefault});
    }
  }

  render() {
    {/* Issues*/}
    {/* Would have liked to use grid but broken on Mac OS as of now */}
    {/* Size of window not adhered to */}
    {/* No way to lock window size */}
    {/* No way to set button size */}
    {/* Stretchy prop being set to false on buttons seemed to be ignored */}
    return (
      <App>
        <Window title="Calculator" size={{w: 300, h: 300}} menuBar={false}>
            <Box>
              <Text>{this.state.display}</Text>
              <Button onClick={this._appendToCalc}>0</Button>
              <Button onClick={this._appendToCalc}>1</Button>
              <Button onClick={this._appendToCalc}>2</Button>
              <Button onClick={this._appendToCalc}>3</Button>
              <Button onClick={this._appendToCalc}>4</Button>
              <Button onClick={this._appendToCalc}>5</Button>
              <Button onClick={this._appendToCalc}>6</Button>
              <Button onClick={this._appendToCalc}>7</Button>
              <Button onClick={this._appendToCalc}>8</Button>
              <Button onClick={this._appendToCalc}>9</Button>
              <Button onClick={this._appendToCalc}>+</Button>
              <Button onClick={this._appendToCalc}>-</Button>
              <Button onClick={this._appendToCalc}>*</Button>
              <Button onClick={this._appendToCalc}>/</Button>
              <Button onClick={this._appendToCalc}>)</Button>
              <Button onClick={this._appendToCalc}>(</Button>
              <Button onClick={this._calculate}>=</Button>
              <Button onClick={this._clearAll}>Clear all</Button>
            </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
