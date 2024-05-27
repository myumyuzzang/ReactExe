import {MdAdd, Md9K} from 'react-icons/md';
import './TodoInsert.scss';
import { useState } from 'react';
import { useCallback } from 'react';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback( e=> {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요' 
                    value={value}
                    onChange={onChange}
            />
            <button type='submit'>
                <MdAdd/>
                {/* <Md9K /> */}
            </button>
        </form>
    )
}

export default TodoInsert;