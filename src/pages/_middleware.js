import { NextResponse } from 'next/server';

export async function middleware( request ) {
  // create an instance of the class to access the public methods.
  //This uses`next()`,
  
  let response = NextResponse.next();
  
  const country = request.geo.country || 'US';
  const city = request.geo.city || 'San Francisco';
  const region = request.geo.region || 'CA';

  // get the cookies from the request
  let cookieFromRequest = request.cookies['location-cookie'];

  if(!cookieFromRequest) {
    // set the `cookie`
    response.cookie('location-cookie', `${country|city|region}`);
  }

  return response;
}

