const dateParamsToSimpleDate = ( dateObj ) => {
  let date = '';
  if ( Object.keys( dateObj ).length === 0 || !dateObj ) {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = ( d.getMonth() + 1 ).toString().padStart( 2, '0' );
    const dd = d.getDate().toString().padStart( 2, '0' );

    date = `${ yyyy }-${ mm }-${ dd }`;
  } else {
    const { year, month, day } = dateObj;
    const mm = month.toString().padStart( 2, '0' );
    const dd = day.toString().padStart( 2, '0' );
    date = `${ year }-${ mm }-${ dd }`;
  }
  return date;
}

const newDateValueToDateObj = ( newDateValue ) => {
  const d = new Date( newDateValue );
  const year = d.getFullYear();
  const month = ( d.getMonth() + 1 ).toString().padStart( 2, '0' );
  const day = d.getDate().toString().padStart( 2, '0' );

  return { year, month, day };
}

export { 
  dateParamsToSimpleDate, 
  newDateValueToDateObj 
};
