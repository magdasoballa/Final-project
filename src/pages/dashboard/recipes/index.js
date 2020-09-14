import React, {useState} from 'react';
import "./styles.scss"
import SearchIcon from '@material-ui/icons/Search';

export const Recipes = () => {
    const [inputVal, setInputVal] = useState('')
    const [data, setData] = useState(null)
    const [dataDetails, setDataDetails] = useState({})
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }


    return <div className='recipes'>
        <h1 className='recipes_title'>Meal finder</h1>

        <form style={{display: 'flex'}}>
            <input type="text" id="search" placeholder="Search for meals or keywords" value={inputVal}
                   onChange={(e) => setInputVal(e.target.value)} className='recipes_input'  style={{width: '160px'}}/>
            <button onClick={handleClick} className='recipes_input'><SearchIcon/></button>
        </form>
        <h3 >Search result for {inputVal}</h3>
        {data && data.meals &&
        data.meals.map((meal, index) => (
            <div className='recipe_section' key={meal.idMeal}>
                <h3 className='recipes_subtitle'>{meal.strMeal}</h3>
                <img className='recipe_section_img' src={meal.strMealThumb} alt={meal.strMeal}/>

                <button className='recipes_input' onClick={() => {
                    console.log(meal)
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                        .then((res) => res.json())
                        .then((data) => {
                            const meal = data.meals[0];
                            const ingredients = []
                            for (let i = 1; i <= 20; i++) {
                                if (meal[`strIngredient${i}`]) {
                                    ingredients.push(
                                        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                                    )
                                }

                            }
                            setDataDetails(  {
                                [index]: {
                                    ingredients,
                                    meal,
                                }
                            })
                        })


                }}>Click for details
                </button>
                {dataDetails[index] && (
                    <div className='recipe_section ' >
                        <h1 className='recipes_details'>{dataDetails[index].meal.strMeal}</h1>
                        <img src={dataDetails[index].meal.strMealThumb} alt={dataDetails[index].meal.strMeal}
                        className='recipe_section_img_bigger' />
                        <div>
                            {dataDetails[index].meal.strCategory ? <p>Category: {dataDetails[index].meal.strCategory}</p> : ''}
                            {dataDetails[index].meal.strArea ? <p>Cuisine: {dataDetails[index].meal.strArea}</p> : ''}
                        </div>
                        <h2>Ingredients</h2>
                        <ul>
                            {dataDetails[index].ingredients.map((el, index) => <li key={index}>{el}</li>)}
                        </ul>
                            <p>{dataDetails[index].meal.strInstructions}</p>
                            <button onClick={()=>setDataDetails(Object.assign(dataDetails)[index] = false)}>Close</button>
                    </div>
                )}
            </div>
        ))
        }
    </div>
}
