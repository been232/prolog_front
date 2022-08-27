
import client from '../api/axiosConfig';
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
    postLogin: async (info) => {
        return await postJsonReqest('/login', info );
    },
    // 이메일 인증 번호 전송
    postEmail: async (email) => {
        return await postJsonReqest('/email', email);
    },
    // 이메일 인증 번호 확인
    postAuthEmail: async (email, emailAuthNumber) => {
        return await postJsonReqest('/email/auth', { email, emailAuthNumber });
    },
    // 회원가입
    postSignup: async (info) => {
        return await postJsonReqest('/signup/email', info);
    },
    // 회원탈퇴
    getWithdrawal: async () => {
        return await getRequest('/memberout');
    },
    // 아이디 찾기
    postFindID: async (info) => {
        return await postJsonReqest(`/idauth`, info);
    },
    // 비밀번호 변경
    postChangePW: async (info) => {
        return await postJsonReqest(`/updatepw`, info);
    },
    // 카카오 소셜 로그인: 인가코드 및 정보 전송
    postKakaoLogin: async (info) => {
        return await postJsonReqest(`/login-kakao-code`, info);
    },

    // Mypage--------------------------------------------------------------------------------
    // 내 정보 조회
    getReadMyInfo: async () => {
        return await getRequest(`/my-info`);
    },
    // 내 정보 수정
    putUpdateMyInfo: async (info) => {
        return await putJsonReqest(`/my-info-update`, info);
    },


};

export default Api;