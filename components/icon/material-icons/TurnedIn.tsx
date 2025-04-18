import React, { SVGProps } from 'react'

const SvgTurnedIn = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97l-4.21-1.81-.79-.34-.79.34L7 17.97V5h10v12.97z' />
			<path d='M7 17.97l4.21-1.81.79-.34.79.34L17 17.97V5H7z' opacity={0.3} />
		</svg>
	)
}

export default SvgTurnedIn
