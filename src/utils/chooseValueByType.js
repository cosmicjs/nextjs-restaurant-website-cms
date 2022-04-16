const chooseByType = (data, slugName) => {
  if( data && slugName ) {
    const chooseBySlug = data?.filter(content => Object.values(content).includes(slugName));
    return chooseBySlug ? chooseBySlug[0] : [];
  }
}

export default chooseByType;