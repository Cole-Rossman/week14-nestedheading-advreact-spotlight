import { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import CharacterDetail from '../CharacterDetail/CharacterDetail'

export default function Main() {
  const { url, path } = useRouteMatch();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await res.json();
        setCharacters(results);
        setLoading(false);
    }
    getCharacters()
  }, []);


  return (
    <>
    <h1>Character List</h1>
    {loading ? (
        <h1>Loading...</h1>
    ) : (
        <>
        <ul>
         {characters.map((character) => {
            return <li key={character.id}>
              <Link to={`${url}${character.id}`}>{character.name}</Link>
            </li>
         })}   
        </ul>
        <Route path={`${path}:id`}>
            <CharacterDetail characters={characters} />
        </Route>
        </>
    )}
    </>
  )
}
