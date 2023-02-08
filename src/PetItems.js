import './App.css';

const PetItems = ({pet}) => {
    const { name, species, favFoods, birthYear, photo } = pet;

    return (
        <div className="pets">
            <div className='pets-card'>
                { photo ? (
                    <div>
                        <img className="pets-image"src={photo} alt="my pet"/>
                        <p className="pets-info">{name ? <strong>{name}'s</strong> : null} my name. {species ? species : null} is my game</p>
                        {favFoods && (
                        <p>And I just love: {favFoods.map((food) => `${food}, `)}</p>
                        )}
                        <p>I was born in{birthYear ? birthYear : null} making me {Date.now() - birthYear} years old</p>
                    </div>
                ) : null }
            </div> 
        </div>
    )
};

export default PetItems;