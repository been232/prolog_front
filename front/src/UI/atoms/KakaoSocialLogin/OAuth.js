const CLIENT_ID = "f2848603b4efd8025c508e2b021ac692";
export const REDIRECT_URI =  "http://localhost:3000/oauth/login/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// const CLIENT_ID = "ac1a0ec2e424c32d5baa95bf6114d8b0";
// export const REDIRECT_URI =  "https://e3c5-210-218-158-162.jp.ngrok.io/login/kakao";

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=account_email,openid`;