import characterData from '../data/characterData.json'
import Character from './Character'

const CharacterGallery = () => {
    const listOfChars = characterData.map((char, i) => <Character { ...char } key={ i } />)
    return (
        <section>
            <h1>An egg of an egg of an egg</h1>
            { listOfChars }
        </section>
    );
};

export default CharacterGallery;