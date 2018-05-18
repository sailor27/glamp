class Lamp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.countUp = this.countUp.bind(this);
        this.flicker = this.flicker.bind(this);
        this.darkness = this.darkness.bind(this);
    }

    //start counter when component mounts
    componentDidMount() {
        this.countUp();
    }

    //when component is receiving props, set state.lit using lit prop. if the counter is less than 6 seconds in, set interval to run flicker function. if the counter has passed 5 seconds, clear the interval.

    componentWillReceiveProps() {
        this.setState({lit: this.props.lit});
        let flicker = 6;
        if (this.state.counter < 6) {
            flicker = setInterval(this.flicker, 50);
        }
        this.setState({ flicker: flicker });
        clearInterval(this.state.flicker);
    }

    //clear counter interval and reset to 0 when component unmounts
    componentWillUnmount() {
        clearInterval(this.state.countInterval);
        this.setState( { counter: 0 } );
    }

    //toggle state.lit
    flicker() {
        this.setState({ lit: !this.state.lit });
    }

    //increment counter in state once per second
    countUp() {
        let countInterval;
        countInterval = setInterval( () => {
            const counter =  this.state.counter + 1;
            this.setState({ counter: counter });
        }, 1000);
        this.setState({ countInterval: countInterval });
    }

    //darken overlay for first 5 seconds, then alternate overlay gradient based on state.lit
    darkness(lit, counter) {
        if (counter < 5) {
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

export default Lamp;
