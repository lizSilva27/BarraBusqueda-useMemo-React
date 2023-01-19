import { useMemo } from 'react';
import styled from 'styled-components';

const StyledMarker = styled.span`
	background-color: yellow;
	font-weight: bolder;
	border-radius: 2px;
`;

const StyledItem = styled.a`
	color: Black;
	display: block;
	padding: 10px;
	border: none;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background-color: #4c91ba;
		color: White;
	}

	&:hover span {
		color: Black;
	}
`;

function MarkerItem( {item, query, onClick} ) {

	const {left, center, right} = useMemo(() => getPosition(item, query), [item, query]);

	function getPosition(item, query) {
		const index = item.title.toLowerCase().indexOf(query);
		const left = item.title.slice(0, index);
		const right = item.title.slice(index + query.length);
		const center = item.title.slice(index, index + query.length);
		return {
			left,
			center,
			right
		};
	}

	function handleClick(e) {
    onClick(item);
  }


	return (	
		<StyledItem onClick={handleClick}>
			{left}
			<StyledMarker> {center} </StyledMarker>
			{right}
		</StyledItem>
	)
}

export default MarkerItem