
import client from 'API/axiosConfig';
import qs from "qs";


const getRequest = async (path, params) => {
    try {
        params = qs.stringify(params);
        const data = await client.get(path + params);
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
};

const postFormReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        })
        return data;
    } catch (e) {
        console.log(e);
    }
};

const postJsonReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return data;
    } catch (e) {
        console.log(e);
    }
};

const putJsonReqest = async (path, body) => {
    try {
        const data = await client.put(path, body, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return data;
    } catch (e) {
        console.log(e);
    }
};

const deleteJsonReqest = async (path) => {
    try {
        const data = await client.delete(path, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return data;
    } catch (e) {
        console.log(e);
    }
};

const Api = {
    // 이메일 인증코드 저장
    emailCode: null,

    // 한 페이지당 보여줄 컨텐츠 개수
    pageCount: 3,

    // 로그인
    postLogin: async (email, password) => {
        return await postJsonReqest('/auth/login', {
            email,
            password
        });
    },
    // 로그아웃
    postLogout: async () => {
        return await postJsonReqest('/auth/logout', null);
    },
    // 이메일 인증 번호 전송
    postEmail: async (email) => {
        return await postJsonReqest('/auth/sendmail', { email }
        );
    },
    // 이메일 인증 번호 확인
    postAuthEmail: async (email, authkey) => {
        console.log(email, authkey)
        return await postJsonReqest('/auth/authmail', { email, authkey });
    },
    // 회원가입
    postSignup: async (info) => {
        return await postJsonReqest('/auth/signup', info);
    },
    // 회원탈퇴
    getWithdrawal: async () => {
        return await deleteJsonReqest('/user');
    },

    // Mypage--------------------------------------------------------------------------------
    // 내 정보 조회
    getInfo: async () => {
        return await getRequest(`/mypage/my-info`);
    },
    // 내 정보 수정
    postUpdateMyInfo: async (userId, user) => {
        return await postJsonReqest(`/mypage/${userId}`, user);
    },
    // 내가 쓴 글 조회
    getMyPost: async () => {
        return await getRequest(`/mypage/post`);
    },

};

export default Api;