const resetErrors = ( setErrors, timeOut = 2500 ) => {
  setTimeout( () => setErrors( {} ), timeOut );
}

export { resetErrors };
