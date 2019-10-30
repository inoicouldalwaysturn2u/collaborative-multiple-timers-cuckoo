import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from './../../../ancillary/helpers/general';

import Svg from './../TimerSvgs';
import './styles.scss';

const Room = ( { room, handler, width, height, className } ) => {
  const [ curr, setCurr ] = useState( {} );

  useEffect( () => {
    // current: 175, currentFormatted: "02:55", currentProgress: 11.666666666666666, totalDuration: 1500
    handler( room, setCurr );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  const { current, currentFormatted, totalDuration } = curr;
  return (
    <div className="content">
      <h2 className="theh">
        { room } 
      </h2>

      <div className="svg-parent">
      { !isEmpty( curr ) && 
      <>
        <Svg 
          className={ className } 
          timer={ currentFormatted } 
          secondsLeft={ current } 
          duration={ totalDuration } 

          width={ width } 
          height={ height } 
        />
      </>
      }
      { isEmpty( curr ) && 
        <p><i>Nothing to see here. Move along.</i></p>
      }
      </div>
    </div>
  ); 
};

Room.propTypes = {
  room: PropTypes.string.isRequired, 
  handler: PropTypes.func.isRequired, 
  width: PropTypes.number, 
  height: PropTypes.number, 

  className: PropTypes.oneOfType( [
    PropTypes.string, 
    PropTypes.number 
  ] ) 
};

Room.defaultProps = {  
  width: 300, 
  height: 300, 
  className: 'roompop' 
};

export default Room;
