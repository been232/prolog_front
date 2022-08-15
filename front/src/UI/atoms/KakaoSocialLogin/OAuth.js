const CLIENT_ID = "f2848603b4efd8025c508e2b021ac692";
const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;