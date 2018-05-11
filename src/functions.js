
    handleMouseOverSkew(e) {
        const skewIncremeent = window.innerHeight / 360;
        const translateIncremeent = window.innerWidth / 360;
        const mouseYPositionPercent = (e.clientY / window.innerHeight) * 10;
        const mouseXPositionPercent = (e.clientX / window.innerWidth) * 10;
        const skewDegree = mouseYPositionPercent * skewIncremeent;
        const translateDegree = mouseXPositionPercent * translateIncremeent;

       this.setState({
           skew: skewDegree,
           translate: translateDegree
       });
   }



   const Lamp = props => {

   	const style = {
           zIndex: '-1',
   		width: '40px',
   		height: '40px',
   		backgroundColor: '#fff',
   		opacity: props.lit ? 1 : 0.1,
   		borderRadius: '50%',
           top: '46%',
           left: '47%',
           boxShadow:
           `0 0 60px 30px #fff,
           0 0 100px 60px ${props.color},
           0 0 140px 90px ${props.color}`
       }

       const overlay = {
           width: '80vw',
           height: '80vh',
           opacity: '0.85',
           background: props.lit ? 'radial-gradient(#80808085 0, #1f1f1f, black 80%)' : '#000'
       }

   	return(
           <div>
               <div style={overlay}></div>
               <div style={style}></div>
           </div>
       );
   };
   export default Lamp
