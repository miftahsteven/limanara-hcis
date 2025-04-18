import React, { SVGProps } from 'react'

const SvgLooks5 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M19 5H5v14h14V5zm-4 4h-4v2h2a2 2 0 012 2v2a2 2 0 01-2 2H9v-2h4v-2H9V7h6v2z'
				opacity={0.3}
			/>
			<path d='M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm4 8h4v2H9v2h4a2 2 0 002-2v-2a2 2 0 00-2-2h-2V9h4V7H9v6z' />
		</svg>
	)
}

export default SvgLooks5
