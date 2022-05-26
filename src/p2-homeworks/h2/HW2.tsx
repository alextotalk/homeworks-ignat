import React, {useState} from 'react'
import Affairs from './Affairs'
import m from './Affairs.module.css'


export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number,
    name: string,
    priority: string
}
export type DefaultAffairsType = AffairType[]
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: DefaultAffairsType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: DefaultAffairsType, filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'low')
        return affairs.filter(affair => affair.priority === 'low')// need to fix
    else if (filter === 'high')
        return affairs.filter(affair => affair.priority === 'high')// need to fix
    else if (filter === 'middle')
        return affairs.filter(affair => affair.priority === 'middle')// need to fix
    else
        return affairs
}
export const deleteAffair = (affairs: DefaultAffairsType, id: number): DefaultAffairsType => { // need to fix any
    return affairs.filter(affair => affair._id !== id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<DefaultAffairsType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    } // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2
            <div className={m.wrapperClass}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
