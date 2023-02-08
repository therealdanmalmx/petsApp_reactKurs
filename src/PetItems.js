import './App.css';

const PetItems = ({pet}) => {
    const { name, species, favFoods, birthYear, photo } = pet;

    return (
        <div className="pets">
            <div className='pets-card'>
                {name}
            </div> 
        </div>
    )
};

export default PetItems;