import Link from 'next/link';
import Image from 'next/image';
import placeholder from '../public/placeholderImage.jpeg';
import recipeStyles from '../styles/Recipe.module.css';

const RecipeItem = ({ recipe }) => {
	const { image, label } = recipe.recipe;
	// get recipe id from recipe.uri
	const recipeUri = recipe.recipe.uri; // typeof: string
	// console.log(recipeUri);
	const searchTerm = '#';
	const indexOfHash = recipeUri.indexOf(searchTerm);
	const recipeId = recipeUri.slice(indexOfHash + 1); // get recipe id without the hash
	// console.log(recipeId);

	return (
		<div>
			<Link href="/recipe/[id]" as={`/recipe/${recipeId}`}>
				<a className={recipeStyles.card}>
					<h3>{label}</h3>
					<div className="recipe-thumbnail">
						<Image
							src={image}
							alt="recipe thumbnail"
							width={100}
							height={100}
						/>
						{/* <Image
							src={placeholder}
							alt="recipe thumbnail"
							width={100}
							height={100}
						/> */}
					</div>
				</a>
			</Link>
		</div>
	);
};

export default RecipeItem;
