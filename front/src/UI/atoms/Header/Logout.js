
const Logout = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('memberId')
    window.location.href = '/';
    alert('로그아웃되었습니다.');
}

export default Logout;