import styled, { css } from 'styled-components'

import { fluidFontSize } from './utils'

export const Title = styled.h2`
	color: ${({ theme, clr }) => theme.color[clr]};
	margin-top: ${({ marginTop }) => marginTop || 0};
	margin-bottom: ${({ marginBot }) => marginBot || 0};
	font-weight: ${({ theme, weight }) => theme.fontWeight[weight]};
	${({ min = 18, max = 40 }) => fluidFontSize(min, max)}
`

export const Par = styled.p`
	line-height: 1.4;
	color: ${({ theme, clr }) => theme.color[clr]};
	margin-top: ${({ marginTop }) => marginTop || 0};
	margin-bottom: ${({ marginBot }) => marginBot || 0};
	font-weight: ${({ theme, light }) =>
		light ? theme.fontWeight.light : theme.fontWeight.regular};
	${({ min = 16, max = 20 }) => fluidFontSize(min, max)}
`

export const Link = styled.a`
	line-height: 1.4;
	color: ${({ theme, clr }) => theme.color[clr]};
	margin-top: ${({ marginTop }) => marginTop || 0};
	margin-bottom: ${({ marginBot }) => marginBot || 0};
	font-weight: ${({ theme, light }) =>
		light ? theme.fontWeight.light : theme.fontWeight.regular};
	${({ min = 16, max = 20 }) => fluidFontSize(min, max)}

		&:hover {
			color: ${({ theme }) => theme.color.green};
		}
`

export const List = styled.ul`
	list-style: none;
	li {
		line-height: 1.4;
		color: ${({ theme, clr }) => theme.color[clr]};
		font-weight: ${({ theme, light }) =>
			light ? theme.fontWeight.light : theme.fontWeight.regular};
		${({ min = 16, max = 20 }) => fluidFontSize(min, max)}
		margin-bottom: 0.5em;
		padding-left: 20px;
		position: relative;
		&::before {
			content: '-';
			position: absolute;
			left: 0;
		}
		a {
			text-decoration: none;
			color: ${({ theme, linkClr }) => theme.color[linkClr]};
		}
		&:hover {
			a {
				text-decoration: underline;
				color: ${({ theme }) => theme.color.tertiary};
			}
		}
	}
	${({ activeGrid }) =>
		activeGrid &&
		css`
			display: grid;
			grid-gap: 1em;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		`}
`