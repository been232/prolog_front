// 리다이렉트될 화면
import { useEffect } from 'react';
import MainPage from '../../pages/MainPage/MainPage';

const KakaoOAuthRedirectHandler = (props) => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(async () => {
    const kakaoLogin = async () => {
      let response = {
        data: {
          result: 'success',
          accessToken: 'dfsgdfegsd',
          refreshToken: 'dfsgsdfsdg',
          memberId: 2,
        },
      };

      if (response.data.result === 'success') {
        // sessionStorage.setItem('user', JSON.stringify(response.data, ['accessToken', 'refreshToken']))
        // sessionStorage.setItem('userId', JSON.stringify(response.data.memberId))
        const ACCESS_TOKEN = response.data.accessToken;

        sessionStorage.setItem('user', ACCESS_TOKEN); //예시로 로컬에 저장함
        sessionStorage.setItem(
          'userId',
          JSON.stringify(response.data.memberId)
        );

        props.history.replace('/'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      } else if (response.data.result === 'fail') {
        window.alert('로그인에 실패하였습니다.');
        props.history.replace('/'); // 로그인 실패하면 로그인화면으로 돌려보냄
      }
    };
    kakaoLogin(code);
  }, []);

  return <MainPage />;
};

export default KakaoOAuthRedirectHandler;
