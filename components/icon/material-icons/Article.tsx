import React, { SVGProps } from 'react'

const SvgArticle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5 5v14h14V5H5zm9 12H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' opacity={0.3} />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-2-6H7v-2h10v2zm0-4H7V7h10v2zm-3 8H7v-2h7v2z' />
		</svg>
	)
}

export default SvgArticle
