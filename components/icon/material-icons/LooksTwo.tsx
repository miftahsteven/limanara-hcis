import React, { SVGProps } from 'react'

const SvgLooksTwo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M19 5H5v14h14V5zm-4 6a2 2 0 01-2 2h-2v2h4v2H9v-4a2 2 0 012-2h2V9H9V7h4a2 2 0 012 2v2z'
				opacity={0.3}
			/>
			<path d='M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm8 2H9v2h4v2h-2a2 2 0 00-2 2v4h6v-2h-4v-2h2a2 2 0 002-2V9a2 2 0 00-2-2z' />
		</svg>
	)
}

export default SvgLooksTwo
