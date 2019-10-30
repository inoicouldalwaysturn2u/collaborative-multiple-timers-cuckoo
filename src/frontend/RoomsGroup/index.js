import React from 'react';

import RoomsGroup from './../../components/Rooms/Grouped';

const FRoomsGroup = ( props ) => (
  <RoomsGroup 
    name={ props.match.params.name } 
  />
);

export default FRoomsGroup;
