import React, { SVGProps } from 'react'

const SvgHd = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M14.5 10.5h2v3h-2zM19 5H5v14h14V5zm-8 10H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v4z'
				opacity={0.3}
			/>
			<path d='M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM5 5h14v14H5V5zm4.5 6.5h-2V9H6v6h1.5v-2h2v2H11V9H9.5zM17 9h-4v6h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3z' />
		</svg>
	)
}

export default SvgHd
