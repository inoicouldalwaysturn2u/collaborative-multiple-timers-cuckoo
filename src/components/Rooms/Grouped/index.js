import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

import db from './../../../firebase/firebase';

import Room from './../Room';
import Add from './../Add';
import Delete from './../Delete';

import './styles.scss';

const getData = ( document ) => {
  return db.collection( 'rooms' ).doc( document ).get().then( ( doc ) => {
    if ( doc.exists ) {
      return doc.data()[ 'rooms' ];
    } else {
      return [];
    }
  } );
};

const RoomsGroup = ( { name } ) => {
  const [ rooms, setRooms ] = useState( [] );

  const fetchData = async ( name ) => {
    const data = await getData( name );
    setRooms( data );
  };

  useEffect( () => {
    fetchData( name );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  const childHandleMoveInToMyRoom = ( room, setCurr, setFlags ) => {
    const socket = io( `https://cuckoo.team/${ room }` );
    const UPDATE_TIMER = 'update timer';
    // const UPDATE_SETTINGS = 'update settings';
    // const UPDATE_ACTIVITY = 'update activity';

    const update_timer = ( e ) => {
      setCurr( e );
    };

    // const update_flags = ( e ) => {
    //   setFlags( e.flags );
    // }

    socket.on( UPDATE_TIMER, update_timer );
    // socket.on( UPDATE_SETTINGS, update_flags );
  };
  
  return (
    <div 
      id="og_roompop" 
    >
      <h2>
        { name }
      </h2>
      <div>
        { rooms && Array.isArray( rooms ) && rooms.length > 0 && 
        <>
        <p>All rooms in this group:</p>
          <ul>
            { rooms.map( arrival => 
              <li key={ `room-toc-list-${ arrival }` }>
                { arrival }
                <Delete  
                  doc={ name } 
                  setRooms={ setRooms } 
                  currRooms={ rooms } 
                  thisRoom={ arrival } 
                />
              </li>
            ) } 
          </ul>
        </>
        }
        <Add 
          doc={ name } 
          setRooms={ setRooms } 
          currRooms={ rooms } 
        />
      </div>

      <hr className="rooms-borderbottom" />

      <div>
      { rooms && Array.isArray( rooms ) && rooms.length > 0 && 
        <>
        { rooms.map( arrival => 
          <div key={ `roomsgroup-div-${ arrival }` }>
            <Room 
              key={ `room-${ arrival }` } 
              room={ arrival } 
              handler={ childHandleMoveInToMyRoom } 

              width={ 300 } 
              height={ 300 } 
              className="roompop"
            />
          </div>
          )
        }
        </>
      }
      </div>
    </div>
  );
};

RoomsGroup.propTypes = {
  name: PropTypes.string.isRequired, 
};

export default RoomsGroup;
