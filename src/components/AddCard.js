import React, {useState} from 'react'
import axios from 'axios'
import {useRefreshData} from '../DataContext'
import './css/AddCard.css'


const AddCard = (props) => {
    let [newCard, setNewCard] = useState({name:'', body:'', labels:'', image:'', status: false, list: props.list.id})

    const refreshData = useRefreshData()

    const handleFormUpdate = e => {
        setNewCard({...newCard, [e.target.name]: e.target.value})
    }

    const handleAddCard = (e) => {
        e.preventDefault()
        // console.log(props.list)
        axios
            .post('https://notrello-backend.herokuapp.com/api/card', newCard)
            .then(() => {
                refreshData()
                props.setShowAddCard(false)
            })
    }

    return(

            <form onSubmit={handleAddCard}>
                <label>Title: <input type='text' name='name' onChange={handleFormUpdate} /></label>
                <input type='submit' value='Add Card'/>
            </form>


    )
}

export default AddCard
