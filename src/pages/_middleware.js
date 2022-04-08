import { NextResponse } from 'next/server';

const TARGET_COUNTRY = 'US'

export async function middleware( req, res ) {
  const { pathname } = req.nextUrl;

  const country = req.geo.country || 'US';
  const city = req.geo.city || 'New York';

  let response = NextResponse.next();

  if (pathname.includes('/api/menu') && country === TARGET_COUNTRY) {
    response.cookie( `restaurant-city-${city}`);
    return response;;
  }
}