const chooseByType = ( info,type ) => {
  if( info && type ) {
    const choose = info?.filter(content => Object.values(content).includes(type));
    return choose ? choose[0] : [];
  }
}

export default chooseByType;