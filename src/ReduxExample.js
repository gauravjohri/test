import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUserInfo, decrement, increment, incrementByAmount, reset } from './reducers/counter'

const ReduxExample = () => {
    const count = useSelector((state) => state.counter.value)
    const user = useSelector((state) => state.counter.userInfo)
    const dispatch = useDispatch()
    return (
        <div>ReduxExample
            {count}<br />
            {user?.uname}<br />
            <button onClick={() => dispatch(increment())}>Add</button><br />
            <button onClick={() => dispatch(decrement())}>Substract</button><br />
            <button onClick={() => dispatch(incrementByAmount(2))}>Add 2</button><br />
            <button onClick={() => dispatch(addUserInfo({ ...user, unames: 'Demo' }))}>Add User</button><br />
            <button onClick={() => dispatch(reset())}>Reset</button><br />
        </div>
    )
}

export default ReduxExample