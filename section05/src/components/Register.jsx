import {useState} from 'react';
// name
// birth
// country
// detail
const Register = () => {
    const [name, setName]  = useState('');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [memo, setMemo] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeMemo = (e) => {
        setMemo(e.target.value);
    }

    return (
        <>
        <div>
            <div>
                <input value={name} placeholder={"name"} onChange={onChangeName} />
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">Republic of Korea</option>
                    <option value="us">US</option>
                </select>
            </div>
            <div>
                <textarea value={memo} onChange={onChangeMemo} />
            </div>
        </div>
        </>
    );
};

export default Register;