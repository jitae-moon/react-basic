import {useState} from 'react';
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

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <div>
            <div>
                <input name="name" value={input.name} placeholder={"name"} onChange={onChange} />
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
        </div>
        </>
    );
};

export default Register;