import React, { SVGProps } from 'react'

const SvgBarChart = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 9.2h3V19H5zM16.2 13H19v6h-2.8zm-5.6-8h2.8v14h-2.8z' />
		</svg>
	)
}

export default SvgBarChart
