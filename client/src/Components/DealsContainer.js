import { Deals } from './Deals'
import React, { useState, useEffect } from 'react'
import { GameCards } from './GameCards'
import { Button, Form, FormControl } from 'react-bootstrap'

export const DealsContainer = () => {
    const [search, setSearch] =  useState("")
    const [games, setGames] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const submitGameSearch = (e) => {
        e.preventDefault()
        const search = e.target.firstElementChild.value
        fetch("https://www.cheapshark.com/api/1.0/games?title=" + search + "&limit=60&exact=0")
        .then((res) => res.json())
        .then((games) => {
          setGames(games)
        //   console.log(games)
          games.map((game) => <GameCards game={game} />)
        })
        .catch((err) => console.log("error =", err))
     }

    return (
        <div>
            <h1>DEALS!</h1>
            <Form inline onSubmit={submitGameSearch}>
            <FormControl type="text" placeholder="Game Title" className="mr-sm-2" onChange={handleChange} 
                    name="search" value={search}/>
            <Button variant="outline-success" type='submit'>Search</Button>
            </Form>
            {Object.keys(games).length === 0  ? <h1>Search Game Titles</h1> : games.map((game, id) => <GameCards key={id} title={game.external} 
                gameID={game.gameID} price={game.cheapest} cheapestID={game.cheapestDealID} thumb={game.thumb} />)}
        </div>
    )
}
