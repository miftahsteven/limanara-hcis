import React, { SVGProps } from 'react'

const SvgExpandMore = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M24 24H0V0h24v24z' fill='none' opacity={0.87} />
			<path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
		</svg>
	)
}

export default SvgExpandMore
