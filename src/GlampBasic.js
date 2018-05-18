import React from 'react';

class GlampBasic extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0
        }

    }

  render(){
        const { color, lit } = this.props;
        const { counter } = this.state;

        const wrapper = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vw'
        }
        const light = {
            zIndex: '-1',
            width: '10px',
            height: '10px',
            backgroundColor: color,
            opacity: lit ? 1 : 0.1,
            borderRadius: '50%',
            position: 'absolute',
            right: '49%',
            filter: 'blur(5px)',
            boxShadow:
            `inset 0 0 5px 10px rgb(255, 216, 106),
            0 0 60px 30px ${color},
            0 0 80px 60px rgb(236, 70, 0),
            0 0 140px 90px ${color}`
        }

        const overlay = {
            zIndex: '1',
            filter: 'blur(2px)',
            width: '100%',
            height: '100%',
            background: lit?
        	'radial-gradient(rgba(128, 128, 128, 0.25) 0, #1f1f1f, #1f1f1f 16%)'
       		 :
       		'radial-gradient(rgb(60, 33, 33) 0, #1f1f1f, #1f1f1f 20%)'
        }
    return(
		<div style={wrapper}>
        	<div style={overlay}></div>
           	<div style={light}></div>
        </div>
    );
  }
}

export default GlampBasic;












class GlampBasic extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0
        }
		this.countUp = this.countUp.bind(this);
        this.flicker = this.flicker.bind(this);
        this.darkness = this.darkness.bind(this);
    }

  componentDidMount() {
        console.log(this.props);
    	this.countUp();
    }

    componentWillReceiveProps() {
        console.log('receiving props');
        this.setState({lit: !this.props.lit});
        let flicker = 4;
        if (this.state.counter < 4) {
            flicker = setInterval(this.flicker, 80);
        }
        this.setState({ flicker: flicker });
        clearInterval(this.state.flicker);
    }

  	//clear counter interval and reset to 0 when component unmounts
    componentWillUnmount() {
        clearInterval(this.state.countInterval);
        this.setState( { counter: 0 } );
    }

     //increment counter in state once per second
    countUp() {
      	console.log('count up');
        let countInterval;
        countInterval = setInterval( () => {
            const counter =  this.state.counter + 1;
            this.setState({ counter: counter });
        }, 1000);
        this.setState({ countInterval: countInterval });
    }

    //toggle state.lit
    flicker() {
        this.setState({ lit: !this.state.lit });
    }

     //darken overlay for first 4 seconds, then alternate overlay gradient based on state.lit
    darkness(lit, counter) {
        if (counter < 4) {
            return  '#1f1f1f';
        } else {
            const background = lit ?
            'radial-gradient(rgba(128, 128, 128, 0.25) 0, #1f1f1f, #1f1f1f 16%)'
            :
            'radial-gradient(rgb(60, 33, 33) 0, #1f1f1f, #1f1f1f 20%)'
            return background
        }
    }

  render(){
        const { color } = this.props;
        const { counter, lit } = this.state;

        const wrapper = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vw'
        }
        const light = {
            zIndex: '-1',
            width: '10px',
            height: '10px',
            backgroundColor: color,
            opacity: lit ? 1 : 0.1,
            borderRadius: '50%',
            position: 'absolute',
            right: '49%',
            filter: 'blur(5px)',
            boxShadow:
            `inset 0 0 5px 10px rgb(255, 216, 106),
            0 0 60px 30px ${color},
            0 0 80px 60px rgb(236, 70, 0),
            0 0 140px 90px ${color}`
        }

        const overlay = {
            zIndex: '1',
            filter: 'blur(2px)',
            width: '100%',
            height: '100%',
            background: this.darkness(lit, counter)
        }
    return(
		<div style={wrapper}>
        	<div style={overlay}></div>
           	<div style={light}></div>
        </div>
    );
  }
}

export default GlampBasic;





class GlampBasic extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0
        }
		this.countUp = this.countUp.bind(this);
        this.flicker = this.flicker.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    	this.countUp();
    }
  	componentWillReceiveProps() {
        console.log('receiving props');
        this.setState({lit: !this.props.lit});
        let flicker = 4;
        if (this.state.counter < 4) {
            flicker = setInterval(this.flicker, 80);
        }
        this.setState({ flicker: flicker });
        clearInterval(this.state.flicker);
    }

  	//increment counter in state once per second
    countUp() {
      	console.log('count up');
        let countInterval;
        countInterval = setInterval( () => {
            const counter =  this.state.counter + 1;
            this.setState({ counter: counter });
        }, 1000);
        this.setState({ countInterval: countInterval });
    }

    //toggle state.lit
    flicker() {
        this.setState({ lit: !this.state.lit });
    }

  render(){
    const { color } = this.props;
    const { counter, lit } = this.state;

    const wrapper = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vw'
        }
        const light = {
            zIndex: '-1',
            width: '10px',
            height: '10px',
            backgroundColor: color,
            opacity: lit ? 1 : 0.1,
            borderRadius: '50%',
            position: 'absolute',
            right: '49%',
            filter: 'blur(5px)',
            boxShadow:
            `inset 0 0 5px 10px rgb(255, 216, 106),
            0 0 60px 30px ${color},
            0 0 80px 60px rgb(236, 70, 0),
            0 0 140px 90px ${color}`
        }

        const overlay = {
            zIndex: '1',
            filter: 'blur(2px)',
            width: '100%',
            height: '100%',
          	background: lit?
        	'radial-gradient(rgba(128, 128, 128, 0.25) 0, #1f1f1f, #1f1f1f 16%)'
       		 :
       		'radial-gradient(rgb(60, 33, 33) 0, #1f1f1f, #1f1f1f 20%)'
        }
    return(
      <div style={wrapper}>
        <div style={overlay}></div>
        <div style={light}></div>
      </div>
    );
  }
} export default GlampBasic;






class GlampBasic extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0
        }
		this.countUp = this.countUp.bind(this);
        this.flicker = this.flicker.bind(this);
        this.darkness = this.darkness.bind(this);
    }

  componentDidMount() {
        console.log(this.props);
    	this.countUp();
    }

    componentWillReceiveProps() {
        console.log('receiving props');
        this.setState({lit: !this.props.lit});

    }

  	//clear counter interval and reset to 0 when component unmounts
    componentWillUnmount() {
        clearInterval(this.state.countInterval);
        this.setState( { counter: 0 } );
    }

     //increment counter in state once per second
    countUp() {
      	console.log('count up');
        let countInterval;
        countInterval = setInterval( () => {
            const counter =  this.state.counter + 1;
            this.setState({ counter: counter });
        }, 1000);
        this.setState({ countInterval: countInterval });
    }

    //toggle state.lit
    flicker() {
        this.setState({ lit: !this.state.lit });
    }

     //darken overlay for first 4 seconds, then alternate overlay gradient based on state.lit
    darkness(lit, counter) {
        if (counter < 4) {
            return  '#1f1f1f';
        } else {
            const background = lit ?
            'radial-gradient(rgba(128, 128, 128, 0.25) 0, #1f1f1f, #1f1f1f 16%)'
            :
            'radial-gradient(rgb(60, 33, 33) 0, #1f1f1f, #1f1f1f 20%)'
            return background
        }
    }

  render(){
        const { color } = this.props;
        const { counter, lit } = this.state;

        const wrapper = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vw'
        }
        const light = {
            zIndex: '-1',
            width: '10px',
            height: '10px',
            backgroundColor: color,
            opacity: lit ? 1 : 0.1,
            borderRadius: '50%',
            position: 'absolute',
            right: '49%',
            filter: 'blur(5px)',
            boxShadow:
            `inset 0 0 5px 10px rgb(255, 216, 106),
            0 0 60px 30px ${color},
            0 0 80px 60px rgb(236, 70, 0),
            0 0 140px 90px ${color}`
        }

        const overlay = {
            zIndex: '1',
            filter: 'blur(2px)',
            width: '100%',
            height: '100%',
            background: this.darkness(lit, counter)
        }
    return(
		<div style={wrapper}>
        	<div style={overlay}></div>
           	<div style={light}></div>
        </div>
    );
  }
}

export default GlampBasic;
