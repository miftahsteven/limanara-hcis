import React, { SVGProps } from 'react'

const SvgBeenhere = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M19 3H5v12.93l7 4.66 7-4.67V3zm-9 13l-4-4 1.41-1.41 2.58 2.58 6.59-6.59L18 8l-8 8z'
				opacity={0.3}
			/>
			<path d='M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-7 19.6l-7-4.66V3h14v12.93l-7 4.67zm-2.01-7.42l-2.58-2.59L6 12l4 4 8-8-1.42-1.42z' />
		</svg>
	)
}

export default SvgBeenhere
