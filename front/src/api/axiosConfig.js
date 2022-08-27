import axios from 'axios';
import { base_url } from '../api/Url';

/*
const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
    cert: fs.readFileSync("./usercert.pem"),
    key: fs.readFileSync("./key.pem"),
    passphrase: "YYY"
})

const instance = axios.create({ httpsAgent })
*/

const client = axios.create({
    // baseURL: base_url + '/api'
    baseURL: base_url
})

client.interceptors.request.use(
    function (config) {
        const user = sessionStorage.getItem('token'); // 토큰 받아오기
        const userId = sessionStorage.getItem('userId');

        // 토큰 유무 판단 코드
        if (!user) {
            config.headers["X-AUTH-TOKEN"] = null;
            config.headers["USER-ID"] = null;
            return config
        }
        const accessToken = JSON.parse(user).accesstoken;
        config.headers["X-AUTH-TOKEN"] = accessToken;
        config.headers["USER-ID"] = userId;
        return config
    }
)

client.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
        if (error.response && error.response.status === 403) {
            try {
                const originalRequest = error.config;

                const user = sessionStorage.getItem('token'); // 토큰 받아오기
                const { accessToken, refreshToken } = JSON.parse(user)
                const data = await client.get('auth/refreshtoken', {
                    headers: {
                        REFRESHTOKEN: refreshToken
                    }
                })
                console.log(data);
                if (data.data.result === 'fail') {
                    sessionStorage.removeItem('token')
                    window.location.href = '/login';
                    alert('세션이 만료되었습니다.');
                    return null;
                }
                if (data) {
                    const { accessToken, refreshToken } = data.data
                    sessionStorage.removeItem('token')
                    sessionStorage.setItem('token', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
                    originalRequest.headers['accessToken'] = accessToken;
                    return await client.request(originalRequest);
                }
            } catch (error) {
                localStorage.removeItem('token');
                console.log(error);
            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default client;