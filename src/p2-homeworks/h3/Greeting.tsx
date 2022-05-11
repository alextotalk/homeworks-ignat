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
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error === '' ? s.good : s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback}
                   className={`${inputClass} ${s.onFocus}`}/>
            <span>{error}</span>
            <button onClick={addUser} className={inputClass}>add</button>
            <pre> {totalUsers} - Count user names !</pre>

        </div>
    )
}

export default Greeting
