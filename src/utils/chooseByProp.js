const handleChooseByProp = ( info,type ) => {
  if( info && type ) {
    return info?.hasOwnProperty( type ) ? info[ type ] : null;
  }
}

export default handleChooseByProp;