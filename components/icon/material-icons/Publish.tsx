import React, { SVGProps } from 'react'

const SvgPublish = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9.83 12H11v6h2v-6h1.17L12 9.83z' opacity={0.3} />
			<path d='M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z' />
		</svg>
	)
}

export default SvgPublish
