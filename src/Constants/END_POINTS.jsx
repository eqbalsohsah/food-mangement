const BASE_URL=`https://upskilling-egypt.com:3006/api/v1`;
//////////////////////////////
const BASE_AUTH=`${BASE_URL}/Users`
export const AUTH_URLS={
    login:`${BASE_AUTH}/Login`,
     register:`${BASE_AUTH}/Register`,
     forget:`${BASE_AUTH}/Reset/Request`,
     ChangePassword:`${BASE_AUTH}/ChangePassword`,
     verify:`${BASE_AUTH}/verify`,
     reset:`${BASE_AUTH}/Reset`,
     logout:`${BASE_AUTH}/Logout`,
}
///////////////////////////////////////////////////