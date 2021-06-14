import styled from 'styled-components'

// Theme
import { fluidFontSize } from '../theme'

export const SectionContainer = styled.section`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	width: 100%;
	height: auto;

	.sectionTitle {
		text-transform: uppercase;
		${({ min = 18, max = 40 }) => fluidFontSize(min, max)}
	}

	.sectionSubTitle{
		color: ${({ theme }) => theme.color.grey};
		${({ min = 18, max = 34 }) => fluidFontSize(min, max)}
	}

	.sectionLink {
		${({ min = 18, max = 28 }) => fluidFontSize(min, max)}

    color: ${({ theme }) => theme.color.red};

		&:hover {
			color: ${({ theme }) => theme.color.green};
		}
	}
	.sectionPar {
		margin-bottom: 1em;
		${({ min = 18, max = 28 }) => fluidFontSize(min, max)}
	}
`