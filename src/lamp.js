import React from 'react';



const Lamp = props => {
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
        backgroundColor: props.color,

        opacity: props.lit ? 1 : 0.1,
        borderRadius: '50%',
        position: 'absolute',
        right: '49%',
        filter: 'blur(5px)',
        boxShadow:
        `inset 0 0 5px 10px rgb(255, 216, 106),
        0 0 60px 30px ${props.color},
        0 0 80px 60px rgb(236, 70, 0),
        0 0 140px 90px ${props.color}`
    }

    const overlay = {
        filter: 'blur(5px)',
        width: '100%',
        height: '100%',
        background: props.lit?
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
};
export default Lamp;
