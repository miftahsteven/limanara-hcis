import React, { SVGProps } from 'react'

const SvgBedroomBaby = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M4 20h16V4H4v16zm2.45-9.5l-.95-1L7 7.76 6 7h3.65l1.73 3H17v1h-1v2.5l.84 1.46c.39-.28.76-.58 1.1-.92L19 15.1c-1.87 1.87-4.36 2.9-7 2.9s-5.13-1.03-7-2.9l1.06-1.06c.34.34.71.65 1.1.92L8 13.5V9.51l-1.55.99z'
				opacity={0.3}
			/>
			<path
				d='M15.53 15.71l-.03-.06-.81-1.41a7.72 7.72 0 01-5.4 0l-.81 1.41-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79z'
				opacity={0.3}
			/>
			<path d='M7.16 14.96c-.39-.27-.76-.58-1.1-.92L5 15.1c1.87 1.87 4.36 2.9 7 2.9s5.13-1.03 7-2.9l-1.06-1.06c-.34.34-.71.64-1.1.92L16 13.5V11h1v-1h-5.62L9.65 7H6l1 .76L5.5 9.5l.95 1L8 9.51v3.99l-.84 1.46zm1.32.69l.81-1.41c1.74.65 3.66.65 5.4 0l.81 1.41.03.06c-1.1.51-2.3.79-3.55.79s-2.43-.27-3.53-.79l.03-.06z' />
			<path d='M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z' />
		</svg>
	)
}

export default SvgBedroomBaby
