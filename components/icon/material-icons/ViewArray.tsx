import React, { SVGProps } from 'react'

const SvgViewArray = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M9 7h6v10H9z' />
			<path d='M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z' />
		</svg>
	)
}

export default SvgViewArray
