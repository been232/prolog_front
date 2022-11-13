import client from "../api/axiosConfig";
import qs from "qs";
import axios from "axios";
const user = sessionStorage.getItem("userId");
console.log(user);
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
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const postJsonReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const GetJsonUserReqest = async (path) => {
    try {
        const data = await client.get(path, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const GetJsonCategoryReqest = async (path) => {
    try {
        const data = await client.get(path, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const postJsonUserReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const putJsonReqest = async (path, body) => {
    try {
        const data = await client.put(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const patchJsonReqest = async (path, body) => {
    try {
        const data = await client.patch(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const deleteJsonReqest = async (path) => {
    try {
        const data = await client.delete(path, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const Api = {
    // 소정이 연동 --------------------------------------------------------------------------------
    // 로그인
    postLogin: async (info) => {
        return await postJsonReqest("/login", info);
    },
    // 이메일 인증 번호 전송
    postEmail: async (email) => {
        return await postJsonReqest("/email", email);
    },
    // 이메일 인증 번호 확인
    postAuthEmail: async (email, emailAuthNumber) => {
        return await postJsonReqest("/email/auth", { email, emailAuthNumber });
    },
    // 회원가입
    postSignup: async (info) => {
        return await postJsonReqest("/signup/email", info);
    },
    // 회원탈퇴
    getWithdrawal: async () => {
        return await getRequest("/memberout");
    },
    // 아이디 찾기
    postFindID: async (info) => {
        return await postJsonReqest(`/idauth`, info);
    },
    // 비밀번호 변경
    postChangePW: async (info) => {
        return await postJsonReqest(`/updatepw`, info);
    },
    // 카카오 소셜 로그인: 인가코드 전송
    postKakaoCode: async (info) => {
        return await postJsonReqest(`/login/kakao`, info);
    },
    // 카카오 소셜 회원가입: 정보 전송
    postKakaoLogin: async (info) => {
        return await postJsonReqest(`/signup/kakao`, info);
    },
    // 깃허브 소셜 로그인: 인가코드 전송
    postGithubCode: async (info) => {
        return await postJsonReqest(`/login/github`, info);
    },
    // 깃허브 소셜 회원가입: 정보 전송
    postGithubLogin: async (info) => {
        return await postJsonReqest(`/signup/github`, info);
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

    // 카테고리--------------------------------------------------------------------------------
    // 카테고리 등록
    postAddCategory: async (info) => {
        return await postJsonReqest(`/categories`, info);
    },
    // 카테고리 수정
    patchUpdateMyInfo: async (id, info) => {
        return await patchJsonReqest(`/categories/${id}`, info);
    },
    // 카테고리 삭제
    deleteCategory: async (id) => {
        return await deleteJsonReqest(`/categories/${id}`);
    },
    // 카테고리 목록 조회
    getReadCategory: async (id) => {
        return await getRequest(`/users/${id}/categories`);
    },

    // 통계--------------------------------------------------------------------------------
    // 전체 통계 조회
    getTotalStatics: async (year) => {
        return await getRequest(`/mystatis/${year}`);
    },
    // 미니 통계 조회(id: 게시물의 ID)
    getMiniStatics: async (id, year) => {
        return await getRequest(`/myboard/statis/${id}`);
    },

    // MyPage: 게시글 조회 및 레이아웃 조회-----------------------------------------------------
    // 내가 쓴 글 목록 조회
    getMyPost_New: async (user) => {
        return await getRequest(`/my-info/boards?last=0`);
    },
    // 좋아요 한 글 목록 조회
    getHeartPost: async (account) => {
        return await getRequest(`/my-info/likes?last=0`);
    },
    // 레이아웃 목록 조회
    getLayoutList: async (info) => {
        return await getRequest(`/layouts`);
    },

    //채연이 연동-----------------------------------------------------
    //Layout
    getLayoutWrite: async (layout) => {
        return await postJsonUserReqest(`/layout`, JSON.stringify(layout));
    },
    getLayout: async (id) => {
        return await GetJsonUserReqest(`/layouts/${id}`);
    },
    getDeleteLayout: async (id) => {
        return await deleteJsonReqest(`/layouts/${id}`);
    },

    //Board
    getBoardWrite: async (board) => {
        return await postJsonUserReqest(`/board`, JSON.stringify(board));
    },
    getBoard: async (id) => {
        return await GetJsonUserReqest(`/board/${id}`);
    },
    getModifyBoard: async (id, board) => {
        return await putJsonReqest(`/board/${id}`, JSON.stringify(board));
    },
    getDeleteBoard: async (id) => {
        return await deleteJsonReqest(`/board/${id}`);
    },
    //comment
    getComment: async (id) => {
        return await getRequest(`/boards/${id}/comments?page=1&size=10`);
    },
    postComment: async (comment) => {
        return await postJsonUserReqest(`/comments/submitComment`, comment);
    },
    deleteComment: async (id) => {
        return await deleteJsonReqest(`/comments/deleteComment/${id}`);
    },
    modifyComment: async (id, comment) => {
        return await patchJsonReqest(`/comments/modifyComment/${id}`, comment);
    },

    //tag
    getTag: async (name) => {
        return await getRequest(`/tags?name=${name}`);
    },

    //Category
    getCategory: async (users) => {
        return await GetJsonCategoryReqest(`/users/${users}/categories`);
    },
    //mainPage
    getAllPost: async (last) => {
        return await getRequest(`/?last=${last}`);
    },
    getDetailBoard: async (id) => {
        return await getRequest(`/board/${id}`);
    },
    getRecentPost: async (last) => {
        return await getRequest(`/recent/?last=${last}`);
    },

    //Search
    getSearchResult: async (keyword, last) => {
        return await getRequest(`/search?keyword=${keyword}&last=${last}`);
    },

    //image
    getImagePost: async (image) => {
        return await postFormReqest(`upload`, image);
    },
    getImageRemovePost: async (image) => {
        return await deleteJsonReqest(`upload/${image}`);
    },

    postFiles: async (files) => {
        return await postFormReqest("/upload", files);
    },
    deleteFiles: async (files) => {
        return await deleteJsonReqest(`upload/${files}`);
    },
};

export default Api;
