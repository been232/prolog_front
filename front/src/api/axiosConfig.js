import axios from 'axios';
import { base_url } from '../api/Url';

const client = axios.create({
    baseURL: base_url
})

client.interceptors.request.use(
    function (config) {
        const user = sessionStorage.getItem('token'); // 토큰 받아오기
        const userId = sessionStorage.getItem('userId');
        const account = sessionStorage.getItem('account');

        // 토큰 유무 판단 코드
        if (!user) {
            config.headers["X-AUTH-TOKEN"] = null;
            config.headers["USER-ID"] = null;
            config.headers["ACCOUNT"] = null;
            return config
        }
        const accessToken = JSON.parse(user).accesstoken;
        config.headers["X-AUTH-TOKEN"] = accessToken;
        config.headers["USER-ID"] = userId;
        config.headers["ACCOUNT"] = account;
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
                const data = await client.get('auth/refresh-token', {
                    headers: {
                        REFRESHTOKEN: refreshToken
                    }
                })
                console.log(data);
                if (data.data.result === 'fail') {
                    sessionStorage.removeItem('token')
                    window.location.href = '/login';
                    alert('세션이 만료되었습니다.'); // 세션(토큰) 만료 알림
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