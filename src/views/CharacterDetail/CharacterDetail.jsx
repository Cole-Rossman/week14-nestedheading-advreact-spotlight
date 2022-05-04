import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CharacterDetail({ characters = [] }) {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const pickedCharacter = characters.find((character) => character.id === Number(id));
        setCharacter(pickedCharacter);
    }, [id]);

  return (
    <>
    <h1>{character.name}</h1>
    <img src={character.image} alt={`Image of ${character.name}`} />
    <Link to="/">Return to character list</Link>
    </>
  )
}
