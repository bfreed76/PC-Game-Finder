import React, { useState } from "react";
import { GameCards } from "../Components/GameCards";
import { Button, Form, FormControl, CardGroup } from "react-bootstrap";

export const DealsContainer = ({ user, loggedin }) => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const submitGameSearch = (e) => {   // Fetch games
    e.preventDefault();
    const search = e.target.firstElementChild.value;
    fetch(
      "https://www.cheapshark.com/api/1.0/games?title=" +
        search +
        "&limit=60&exact=0"
    )
      .then((res) => res.json())
      .then((games) => {
        setGames(games);
      })
      .catch((err) => console.log("error =", err));
  };

  return (
    <div>
      <h1>SEARCH GAMES</h1>
      <Form
        inline
        onSubmit={submitGameSearch}
        style={{ margin: "auto", width: "40%" }}
      >
        <FormControl
          type="text"
          placeholder="Enter Game Title"
          className="mr-sm-2"
          onChange={handleChange}
          name="search"
          value={search}
        />
        <br></br>
        <Button variant="primary" type="submit">
          Search
        </Button>
        <hr></hr>
      </Form>
      <br></br>
      <CardGroup>
        {Object.keys(games).length === 0 ? (
          null  ) : (
          games.map((game, id) => (
            <GameCards
              key={id}
              title={game.external}
              gameID={game.gameID}
              user={user}
              loggedin={loggedin}
              price={game.cheapest}
              cheapestID={game.cheapestDealID}
              thumb={game.thumb}
            />
          ))
        )}
      </CardGroup>
    </div>
  );
};
