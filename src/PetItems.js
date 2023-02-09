import './App.css';

const PetItems = ({pet, removePet}) => {
    
    const { name, species, favFoods, birthYear, photo } = pet;

    return (
        <div className="pets">
            <div className='pets-card'>
                { photo && (
                    <div>
                        <img className="pets-image"src={photo} alt="my pet"/>
                        <p className="pets-info">{name && <strong>{name}'s</strong>} my name. {species && species} is my game</p>
                        {birthYear && (<p>I was born in {birthYear}</p>)}
                        {favFoods && (
                        <p className="pets-food">And I just love: {favFoods.map((food) => `${food}, `)}</p>
                        )}
                        <button type="button" className="pets-button" onClick={() => removePet(name)}>Don't like me?</button>
                    </div>
                )}
            </div> 
        </div>
    )
};

export default PetItems;