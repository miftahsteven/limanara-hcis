import React, { SVGProps } from 'react'

const SvgQuickreply = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 4v13.17L5.17 16H15v-6h5V4z' opacity={0.3} />
			<path d='M5.17 16L4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17z' />
			<g>
				<path d='M19 23l3.5-7h-2.2l1.7-4h-5v6h2z' />
			</g>
		</svg>
	)
}

export default SvgQuickreply
