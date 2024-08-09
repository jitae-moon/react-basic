import './Main.css';
// JSX 주의사항
// 1. 중괄호 내부에는 js 표현식만 가능
// 2. 숫자, 문자열, 배열값만 렌더링 됨
// 3. 모든 태그는 닫혀야 함
// 4. 최상위 태그는 반드시 한 개
const Main = () => {
    const user = {
        name: 'moon',
        isLoggedIn: false
    };

    // return (
    //     <>
    //     {user.isLoggedIn ? (
    //         <div>Logout</div>
    //     ) : (
    //         <div>Log in</div>
    //     )}
    //     </>
    // );

    if (user.isLoggedIn) {
        return <div style={{
            backgroundColor: 'red',
            borderBottom: '5px solid blue'
        }}>Logout</div>;
    } else {
        return <div className='login'>Log in</div>;
    }
}

export default Main;