import { useReducer } from "react";

// reducer: 변환기
// 상태 변환시키는 함수
function reducer(state, action) {
    console.log(state, action);
    if (action.type === 'INCREASE') {
        return state + action.data;
    } else if (action.type === 'DECREASE') {
        return state - action.data;
    }
}

const Exam = () => {
    // dispatch: 발송하다(상태 변화 있어야 한다는 사실 알리는 함수)
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인자: 상태가 어떻게 변환되길 원하는지
        // action 객체
        dispatch({
            type: "INCREASE",
            data: 1
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1
        });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>+</button>
        </div>
    );
}

export default Exam;