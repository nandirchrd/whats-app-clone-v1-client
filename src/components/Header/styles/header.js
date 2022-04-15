import styled from 'styled-components/macro';

export const Header = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-direction: column;
	gap: 0.8em;
	margin-top: 3em;
`;
export const Icon = styled.img`
	max-width: 50px;
`;
export const Title = styled.h3`
	line-height: 1em;
	font-size: min(max(1.2rem, 5vw), 2.5em);
	max-width: 10em;
	/* border: 2px solid red; */
`;
export const Text = styled.p`
	color: #435a64;
	line-height: 24px;
	font-size: 0.8em;
	max-width: 700px;
`;
