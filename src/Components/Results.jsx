import { useState, useMemo, useEffect } from 'react';
import MarkerItem from './MarkerItem';
import styled from 'styled-components';

const StyledResultsContainer = styled.div`
	position: absolute;
	width: 490px;
	background: White;
	border: 1px solid #222;
	border-top: 1px solid transparent;
	margin-top: -3px;
	box-sizing: border-box;
	border-radius: 0 0 5px 5px;
`;

function Results({ items, onItemSelected, query, onResultCalculated}) {

	const [results, setResults] = useState([]);
	const filteredItems = useMemo(() => findMatch(items, query), [items, query]); 

	useEffect(() => {
		onResultCalculated(results);
	}, [results]);

	function findMatch(items, query) {
		const res = items.filter((i) => {
			return (
        i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0 && query !== ""
      );
		});

		setResults(res);
		return res;
	}

	return (
		<StyledResultsContainer>
			{ query != '' ? filteredItems.map((item) => <MarkerItem key={item.id} item={item} query={query} onClick={onItemSelected} /> ) : '' }
		</StyledResultsContainer>
	)
}

export default Results

