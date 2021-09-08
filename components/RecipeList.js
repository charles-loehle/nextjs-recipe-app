import RecipeItem from './RecipeItem';
import RecipeSearch from './RecipeSearch';
import { v4 as uuidv4 } from 'uuid';

// import recipeStyles from '../styles/Recipe.module.css';

const RecipeList = ({ recipes }) => {
	const { hits } = recipes;
	// console.log(hits);
	return (
		<div>
			<h1>RecipeList</h1>
			<RecipeSearch />
			{hits.map(recipe => (
				<RecipeItem recipe={recipe} key={uuidv4()} />
			))}
		</div>
	);
};

export default RecipeList;
