import { useState, useCallback, useMemo } from 'react';
import Results from './Results';
import styled from 'styled-components';

const StyledSearchBarContainer = styled.div`
		position: relative;
		width: 490px;
		font-size: 1rem;
		font-family: 'Blinker', sans-serif;
		margin-top: 20px;
	`;

	const StyledInput = styled.input`
		padding: 10px;
		border-radius: 5px;
		min-width: 490px;
		box-sizing: border-box;
		border: solid 1px #222;
		outline: none;
		font-size: 1rem;
		font-family: 'Blinker', sans-serif;
	`;

	const StyledContainerResults = styled.p`
		padding: 6px;
		text-align: end;
		width: 490px;
	`;

function SearchBar({ items, onItemSelected }) {

	const [query, setQuery] = useState();
	const [results, setResults] = useState([]);

	function handleOnChange(e) {
		const value = e.target.value;
		setQuery(value);
	}

	function handleResults(items) {
		setResults(items);
	}

	return (
		<StyledSearchBarContainer>
			{results && <StyledContainerResults>{results.length} results</StyledContainerResults>}
			<StyledInput type='text'  onChange={handleOnChange} value={query || ''}></StyledInput>
			<Results 
				items={items} 
				onItemSelected={onItemSelected}
				query={query} 
				onResultCalculated={handleResults} />
		</StyledSearchBarContainer>
	);
}

export default SearchBar
