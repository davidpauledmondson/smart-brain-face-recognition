import React from 'react'; 
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

// SHOULD IT BE THE BELOW LINE?
// const Logo = () => {
//   return (
//       <div className="ma4 mt0">
//           <Tilt glareEnable='true' className="Tilt br2 shadow-2">
//               <img src={ brain } alt="brain logo"/>
//           </Tilt>
//       </div>
//   )
// }

export default Logo;