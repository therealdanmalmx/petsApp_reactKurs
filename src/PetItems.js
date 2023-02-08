import './App.css';

const PetItems = ({pet}) => {
    const { name, species, favFoods, birthYear, photo } = pet;

    return (
        <div className="pets">
            <div className='pets-card'>
                { photo ? (
                    <div>
                        <img src={photo} alt="my pet"/>
                        <p>{name ? name : null}</p>
                        <p>{species ? species : null}</p>
                        <p>{favFoods ? (
                            favFoods.map((food) => <div>food</div>)
                        ): null}</p>
                        <p>{birthYear ? birthYear : null}</p>
                    </div>
                ) : null }
            </div> 
        </div>
    )
};

export default PetItems;