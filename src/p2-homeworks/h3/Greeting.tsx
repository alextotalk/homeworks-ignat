import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: any // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // де-структуризация пропсов
) => {

    return (
        <div className={s.preWrapper}>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
            />
            <span className={error && s.spanClass}>{error}</span>
            <SuperButton disabled={!!error} black onClick={addUser}>add
                User</SuperButton>
            <pre className={s.preClass}> {totalUsers} - Count user names !</pre>

        </div>
    )
}

export default Greeting
