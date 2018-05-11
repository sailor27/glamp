import React, { Component } from 'react';
import Lamp from './lamp';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            lit: false,
            color: "#ec0600"
        }
    }

    componentDidMount(){
        setInterval( () => {
                this.setState({lit: !this.state.lit});
            },
            1000
        );
    }

  render() {

    return (
      <div >
          <Lamp
              lit={this.state.lit}
              color={this.state.color}
          />
      </div>
    );
  }
}

export default App;
