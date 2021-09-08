import Link from 'next/link';
import Image from 'next/image';
import placeholder from '../../../public/placeholderImage.jpeg';

const recipe = ({ recipe }) => {
	const { digest, label, ingredientLines, url } = recipe.recipe;

	console.log(recipe.recipe.image);
	return (
		<>
			<h1>{label}</h1>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<Image
					src={recipe.recipe.image}
					alt="meal thumbnail"
					width={400}
					height={400}
				/>
				{/* <Image
					src={placeholder}
					alt="meal thumbnail"
					width={400}
					height={400}
				/> */}
			</a>
			<h2>Ingredients</h2>
			<ul>
				{ingredientLines.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
			<h2>Nutrients</h2>
			<div className="fats">
				<p>{digest[0].label}</p>
				<ul>
					{digest[0].sub.map((fat, index) => (
						<li key={index}>
							{fat.label}: {fat.total}
							{fat.unit}
						</li>
					))}
				</ul>
			</div>
			<div className="carbs">
				<p>{digest[1].label}</p>
				<ul>
					{digest[1].sub.map((carb, index) => (
						<li key={index}>
							{carb.label}: {carb.total}
							{carb.unit}
						</li>
					))}
				</ul>
			</div>
			<div className="protein">
				<p>{digest[2].label}</p>
				<ul>
					<li>
						{digest[2].total}
						{digest[2].unit}
					</li>
				</ul>
			</div>
			<div className="cholesterol">
				<p>{digest[3].label}</p>
				<ul>
					<li>
						{digest[3].total}
						{digest[3].unit}
					</li>
				</ul>
			</div>
			<div className="sodium">
				<p>{digest[4].label}</p>
				<ul>
					<li>
						{digest[4].total}
						{digest[4].unit}
					</li>
				</ul>
			</div>
			<a href={url} target="_blank" rel="noopener noreferrer">
				Go to instructions
			</a>
			<Link href="/">Go Back</Link>
		</>
	);
};

export const getServerSideProps = async context => {
	const res = await fetch(
		`https://api.edamam.com/api/recipes/v2/${context.params.id}?type=public&app_id=14c68664&app_key=cc33a02c16fadb22aea4ecea7184fee1`
	);

	// const res = await fetch(`http://localhost:3000/recipeById.json`);

	const recipe = await res.json();

	console.log(recipe);

	return {
		props: { recipe },
	};
};

export default recipe;
