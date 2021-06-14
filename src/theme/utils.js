import { css } from 'styled-components'

/**
 * Fluid Typography.
 * @constructor
 * @param {number} minValue - Minimum font size.
 * @param {number} maxValue - Maximum font size.
 */
export const fluidFontSize = (minValue, maxValue) => {
	const minScreenSize = 320
	const calcFontSizeDIf = maxValue - minValue

	return css`
		font-size: calc((${minValue} / 16) * 1rem);
		@media (min-width: ${minScreenSize}px) {
			font-size: calc(
				((${minValue} / 16) * 1rem) + ${calcFontSizeDIf} *
					(100vw - ${minScreenSize}px) / 704
			);
		}
		@media (min-width: 1024px) {
			font-size: calc((${maxValue} / 16) * 1rem);
		}
	`
}