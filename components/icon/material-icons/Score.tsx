import React, { SVGProps } from 'react'

const SvgScore = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M5 19h8l-4-4zm0-2.5l4-4 4 4 6-6V5H5v11.5zM12 6h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V6zM7 8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7V8.25zM19 19v-6l-6 6z'
				opacity={0.3}
			/>
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5l4-4 4 4 6-6v6zm0-8.5l-6 6-4-4-4 4V5h14v5.5zM13.5 9V6H12v6h1.5zm3.7 3l-2-3 2-3h-1.7l-2 3 2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z' />
		</svg>
	)
}

export default SvgScore
