
const Logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('account')
    alert('로그아웃되었습니다.');
    window.location.href = '/';
}

export default Logout;