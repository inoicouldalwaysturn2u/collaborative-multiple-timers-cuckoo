import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, ErrorMessage, withFormik } from 'formik';

import db from './../../../firebase/firebase';
import './../styles.scss'
import { resetErrors } from './../helpers.js';

import { isEmpty } from './../../../ancillary/helpers/general';

const addToFirestore = ( doc, oldData, data ) => {
  const combined = isEmpty( oldData ) ? [ data ] : [ ...oldData, data ];
  const ref = db.collection( 'rooms' ).doc( doc );
  return ref.set( {
      rooms: combined  
  }, { merge: true } );
};

const AddingRoom = props => {
  const {
    touched, 
    errors, 
    isSubmitting, 
    setErrors, 
    
    status 
  } = props;

  const [ showForm, setShowForm ] = useState( false );
  
  const onHandleShowingForm = () => setShowForm( prevState => !prevState );

  return(
    <div>
        { showForm && 
          <div>
            <Form>
              <Field component="input" name="newRoom" className="casual-textfield" />

              <ErrorMessage name="create" render={ err => <div id="feedback">{ err }</div> } />
              { touched.create && errors.create && resetErrors( setErrors ) }

              <button className="casual-button" type="submit" disabled={ isSubmitting }>
                Submit
              </button>
              <button className="casual-button" id="create-room-cancel" type="button" disabled={ isSubmitting } onClick={ () => onHandleShowingForm() }>
                Cancel. Walk away!
              </button>
            </Form>
          </div>
        }

        { !isSubmitting && !showForm && 
          <p>
            <button className="casual-button link-underline-fade" onClick={ onHandleShowingForm }>Add a room <i className="icon-pad-left far fa-door-closed"></i></button>
          </p>
        }

      { status && status.success && <div className="success-msg">{ status.success }</div> }
      { status && status.msg && <div className="success-msg">{ status.msg }</div> }
      { status && status.success && showForm && onHandleShowingForm() }
    </div>
  );
}

const SwoleAddingRoomForm = withFormik( {
  mapPropsToValues: () => ( { 
      room: '', 
  } ), 

  handleSubmit: ( values, { setSubmitting, setStatus, setErrors, resetForm, props } ) => {
    const { doc, setRooms, currRooms } = props;
    const { newRoom } = values;
    const result = addToFirestore( doc, currRooms, newRoom );

    if ( result !== false ) {
      setTimeout( () =>
        setRooms( prevState => {
          if ( prevState ) {
            return prevState.concat( newRoom );
          } else {
            return [ newRoom ];
          }
        } ), 
        1500 
      );

      setStatus( { success: 'Successfully added new room' } );
      setTimeout( resetForm, 2000 );
      
    } else if ( result === false ) {
      setSubmitting( false );
      setErrors( { create: 'Error uploading new room' } );
    }
  }, 

  displayName: 'AddingRoom' 
}, )( AddingRoom );

SwoleAddingRoomForm.propTypes = {
  doc: PropTypes.string.isRequired, 
  setRooms: PropTypes.func.isRequired, 
  currRooms: PropTypes.array.isRequired 
};

export default SwoleAddingRoomForm;
