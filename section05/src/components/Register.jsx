import {useState, useRef} from 'react';
// name
// birth
// country
// detail
const Register = () => {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        memo: ''
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = () => {
        if (input.name === '') {
            inputRef.current.focus();
        }
    }

    return (
        <>
        <div>

            <div>
                <input name="name" value={input.name} placeholder={"name"} onChange={onChange} ref={inputRef} />
            </div>
            <div>
                <input type="date" name="birth" value={input.birth} onChange={onChange} />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">Republic of Korea</option>
                    <option value="us">US</option>
                </select>
            </div>
            <div>
                <textarea name="memo" value={input.memo} onChange={onChange} />
            </div>

            <button onClick={onSubmit}>Submit</button>
        </div>
        </>
    );
};

export default Register;