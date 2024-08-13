import useInput from "../hooks/useInput";
// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문, 반복문 내에서 호출될 수는 없음
// 3. 커스텀 훅을 직접 만들 수 있음

const HookExample = () => {
    const [input, onChange] = useInput();
    // const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
}

export default HookExample;