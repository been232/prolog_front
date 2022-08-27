
const Logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    window.location.href = '/';
    alert('로그아웃되었습니다.');
}

export default Logout;