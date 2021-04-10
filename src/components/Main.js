import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [people, setPeople] = useState(null)


    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                setPeople(response.data)
            })
    }, [])


    return (
        <div>
            {people}
            {/* {people.map((people, index) => {
                return (<div key={index}> {people.name}</div>)
            })} */}
        </div>
    )
}

export default Main
