import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
    let inputClass = error === '' ? s.good : s.error // need to fix with (?:)

    return (
        <div className={s.preWrapper}>
            <input
                value={name}
                onChange={setNameCallback}
                className={`${inputClass} ${s.onFocus}`}/>
            <span className={error && s.spanClass}>{error}</span>
            <button disabled={!!error} onClick={addUser} className={`${inputClass} ${s.button}`}>add User</button>
            <pre className={s.preClass}> {totalUsers} - Count user names !</pre>

        </div>
    )
}

export default Greeting
