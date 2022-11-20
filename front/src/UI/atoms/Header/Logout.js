
const Logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('account')
    alert('로그아웃되었습니다.');
    window.location.href = '/';
}

export default Logout;