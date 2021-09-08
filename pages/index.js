import Head from 'next/head';
import Link from 'next/dist/client/link';
import RecipeList from '../components/RecipeList';
import styles from '../styles/Home.module.css';

export default function Home({ recipes }) {
	//console.log(recipes);
	return (
		<div className={styles.container}>
			<Head>
				<title>Meal Finder | Home</title>
				<meta name="description" content="Recipe search application" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<RecipeList recipes={recipes} />

			<footer className={styles.footer}>
				<a
					href="https://clwebdevelopment.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Copyright 2021 by Charles Loehle
				</a>
			</footer>
		</div>
	);
}

export const getStaticProps = async () => {
	// Search for 20 random recipe with chicken
	const res = await fetch(
		`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=14c68664&app_key=cc33a02c16fadb22aea4ecea7184fee1&random=true`
	);

	// const res = await fetch(`http://localhost:3000/randomChickenList.json`);

	const recipes = await res.json();

	return {
		props: {
			recipes,
		},
	};
};
