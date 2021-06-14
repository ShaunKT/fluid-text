import { css } from 'styled-components'

const sizes = {
	MOBILE: 420,
	TABLET: 768,
	DESKTOP: 992,
	SCREEN: 1200,
}

export default Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label]}px) {
			${css(...args)};
		}
	`
	return acc
}, {})