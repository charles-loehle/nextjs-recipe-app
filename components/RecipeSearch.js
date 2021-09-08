import React, { useState, useEffect } from 'react';

const RecipeSearch = () => {
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const res = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=14c68664&app_key=cc33a02c16fadb22aea4ecea7184fee1&random=true`
		);
		const data = await res.json();
		setRecipes(data.hits);
	};

	const onChange = e => {
		setSearch(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor="">Search recipes</label>
				<input type="text" onChange={onChange} value={search} />
				<button type="submit" className="btn btn-primary">
					Search
				</button>
			</form>
		</div>
	);
};

export default RecipeSearch;
