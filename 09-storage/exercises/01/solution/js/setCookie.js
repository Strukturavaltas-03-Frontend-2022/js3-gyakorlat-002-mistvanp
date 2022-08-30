// 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
// egy `token` nevű sütiben, ami 15 perc után lejár!
'use strict';

const setCookie = {
    getCookie(name) {
        const token = document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith(`${name}=`))
        
    }
}



export default setCookie;
