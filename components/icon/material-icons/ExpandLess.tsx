import React, { SVGProps } from 'react'

const SvgExpandLess = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z' />
		</svg>
	)
}

export default SvgExpandLess
