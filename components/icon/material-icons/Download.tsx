import React, { SVGProps } from 'react'

const SvgDownload = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z' opacity={0.3} />
			<path d='M15 9V3H9v6H5l7 7 7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z' />
		</svg>
	)
}

export default SvgDownload
