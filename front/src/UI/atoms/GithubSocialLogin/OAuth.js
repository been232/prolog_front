const CLIENT_ID = "85a2033b300b597b4688";
const CLIENT_SECRET_KEY = "";
const REDIRECT_URI =  "http://localhost:3000/oauth/login/github";

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
