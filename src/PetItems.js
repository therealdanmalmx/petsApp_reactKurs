import './App.css';

const PetItems = ({pet}) => {
    const { name, species, favFoods, birthYear, photo } = pet;

    const removeMe = (name) => {
        console.log('I was removed', name)
    }
    return (
        <div className="pets">
            <div className='pets-card' key={name}>
                { photo && (
                    <div>
                        <img className="pets-image"src={photo} alt="my pet"/>
                        <p className="pets-info">{name ? <strong>{name}'s</strong> : null} my name. {species ? species : null} is my game</p>
                        {birthYear && (<p>I was born in {birthYear}</p>)}
                        {favFoods && (
                        <p className="pets-food">And I just love: {favFoods.map((food) => `${food}, `)}</p>
                        )}
                        <button type="button" className="pets-button" onClick={() => removeMe(name)}>Don't like me?</button>
                    </div>
                )}
            </div> 
        </div>
    )
};

export default PetItems;