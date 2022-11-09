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

import PrivateRoutes from '../../access/PrivateRoutes';
import isLogin from '../../access/isLogin';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderOrganisms sx={{ marginBottom: 10 }} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Layout/*" element={<PrivateRoutes user={isLogin()}><LayoutPage /></PrivateRoutes>} />
            <Route path="/LayoutWrite/*" element={<PrivateRoutes user={isLogin()}><LayoutWritePage /></PrivateRoutes>} />
            <Route path="/BoardDetail/*" element={<BoardDetailPage />} />
            <Route path="/BoardWrite/*" element={<PrivateRoutes user={isLogin()}><BoardWritePage /></PrivateRoutes>} />
            <Route path="/BoardModify/*" element={<PrivateRoutes user={isLogin()}><BoardModifyPage /></PrivateRoutes>} />
            <Route path="/signup/*" element={<SignUpPage />} />
            <Route path="/auth/*" element={<Authentication />} />
            <Route path="/logout/*" element={<PrivateRoutes user={isLogin()}><Logout /></PrivateRoutes>} />

            <Route path="/findID/*" element={<FindIdPage />} />

            <Route path="/memberInfo/*" element={<PrivateRoutes user={isLogin()}><ReadMemberInfoPage /></PrivateRoutes>} />
            <Route path="/changePW/*" element={<PrivateRoutes user={isLogin()}><ChangePWPage /></PrivateRoutes>} />
            <Route path="/mypage/*" element={<PrivateRoutes user={isLogin()}><MyPage /></PrivateRoutes>} />

            <Route path="/search" element={<SearchPage />} />

            <Route path="/AllStatistics/*" element={<PrivateRoutes user={isLogin()}><StatisticsPage /></PrivateRoutes>} />

            <Route
              path="/oauth/login/kakao"
              element={<KakaoOAuthRedirectHandler />}
            ></Route>
            <Route
              path="/oauth/login/github"
              element={<GithubOAuthRedirectHandler />}
            ></Route>

<<<<<<< HEAD
            <Route path="/Test" element={<FileViewerMolecule />} />
=======
            <Route path="/Test" element={<FileViewer />} />
            <Route path="/stat" element={<MyBoardList />} />
            <Route path="/tree" element={<TreeList />} />
>>>>>>> b3e666fc3cbd04b7e36ad254ba3730b62436cfbb
          </Routes>
          <ControlledOpenSpeedDial />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
