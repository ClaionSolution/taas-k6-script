import { check } from 'k6';
import http from 'k6/http';
import { StringWithDefault } from './def.js';


const baseURL = StringWithDefault(`https://test.k6.io`)(__ENV.BASE_URL)

export default function () {  
    // console.log('BASE_URL:', baseURL)

    const res = http.get(baseURL);

    // console.log("response.headers:", res.headers);
    // console.log("response.body:", res.body);

	check(res, { 'check status is 200': (r) => r.status == 200 })
}
