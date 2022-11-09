import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from '../organisms/Header/HeaderOrganisms';
import BoardDetailPage from '../pages/BoardWrite,DetailPage/BoardDetailPage';
import MainPage from '../pages/MainPage/MainPage';
import LayoutPage from '../pages/LayoutPage/LayoutPage';
import ControlledOpenSpeedDial from '../atoms/MainPage/ControlledOpenSpeedDial';
import LoginPopupPage from '../pages/LoginPopupPage/LoginPopupPage';
import Logout from '../atoms/Header/Logout';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import FindIdPage from '../pages/FindIdPage/FindIdPage';
import LayoutWritePage from '../pages/LayoutPage/LayoutWritePage';
import BoardWritePage from '../pages/BoardWrite,DetailPage/BoardWritePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Authentication from '../pages/AuthenticationPage/AuthenticationPage';
import ReadMemberInfoPage from '../pages/ReadMemberInfoPage/ReadMemberInfoPage';
import ChangePWPage from '../pages/ChangePWPage/ChangePWPage';
import MyPage from '../pages/MyPage/MyPage';
import BoardModifyPage from '../pages/BoardModifyPage/BoardModifyPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage';
import './App.css';
import FileViewer from '../atoms/BoardWrite,DetailPage/FileViewer';

import KakaoOAuthRedirectHandler from '../atoms/KakaoSocialLogin/SocialLogin';
import GithubOAuthRedirectHandler from '../atoms/GithubSocialLogin/SocialLogin';

import FileViewerMolecule from '../molecules/BoardWrite,DetailPage/FileViewerMolecules';
import TreeList from '../pages/Test/Test';
import MyBoardList from '../molecules/MyPage/MyBoardList';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderOrganisms sx={{ marginBottom: 10 }} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Layout/*" element={<LayoutPage />} />
            <Route path="/LayoutWrite/*" element={<LayoutWritePage />} />
            <Route path="/BoardDetail/*" element={<BoardDetailPage />} />
            <Route path="/BoardWrite/*" element={<BoardWritePage />} />
            <Route path="/BoardModify/*" element={<BoardModifyPage />} />
            <Route path="/signup/*" element={<SignUpPage />} />
            <Route path="/auth/*" element={<Authentication />} />
            <Route path="/logout/*" element={<Logout />} />

            <Route path="/findID/*" element={<FindIdPage />} />
            <Route path="/LayoutWrite/*" element={<LayoutWritePage />} />

            <Route path="/memberInfo/*" element={<ReadMemberInfoPage />} />
            <Route path="/changePW/*" element={<ChangePWPage />} />
            <Route path="/mypage/*" element={<MyPage />} />

            <Route path="/search" element={<SearchPage />} />

            <Route path="/AllStatistics/*" element={<StatisticsPage />} />

            <Route
              path="/oauth/login/kakao"
              element={<KakaoOAuthRedirectHandler />}
            ></Route>
            <Route
              path="/oauth/login/github"
              element={<GithubOAuthRedirectHandler />}
            ></Route>

            <Route path="/Test" element={<FileViewer />} />
            <Route path="/stat" element={<MyBoardList />} />
            <Route path="/tree" element={<TreeList />} />
          </Routes>
          <ControlledOpenSpeedDial />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
