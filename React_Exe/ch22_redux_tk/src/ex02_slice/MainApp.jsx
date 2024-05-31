import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

// store 내에 작은 store를 slice라 함
const counterSlice = createSlice({
                                    name: 'counterSlice',
                                    initialState:{value:0, mValue:0},
                                    reducers:{
                                        up:(state, action) => {
                                            state.value = state.value + action.step;
                                        },
                                        down:(state, action) => {
                                            state.mValue = state.mValue - action.step;
                                        }
                                    }
                                });

// 큰 저장소인 store내에 작은 저장소인 slice를 포함
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

/*
function reducer(state, action) {   // 이벤트 처리 후 store 저장변수에 갱신
    if(action.type === 'up')
        return {...state, value:state.value + action.step};
    return state;
}

const initialState = {value:0};     // 초기값/어떤 변수를 store에 저장할 것인가
const store = createStore(reducer, initialState);   // 공유 저장소
*/

function Counter() {
    const dispatch = useDispatch(); // redux store에 저장된 reducer에 이벤트 전달
    const count = useSelector(state => state.counter.value);    // redux store에 저장된 객체의 value필드 값을 가져옴
    const mCount = useSelector(state => state.counter.mValue);
    return (
        <div>
            <button onClick={() => {
                dispatch({type:'counterSlice/up', step:2});  // reducer의 action에 객체 전달
            }}>+</button> {count}
            <br/>
            <button onClick={() => {
                dispatch({type:'counterSlice/down', step:2});  // reducer의 action에 객체 전달
            }}>-</button> {mCount}
        </div>
    )
}

function MainApp() {
    return(
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}

export default MainApp;