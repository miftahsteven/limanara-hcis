import React, { SVGProps } from 'react'

const SvgCropFree = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3v4zM21 5c0-1.1-.9-2-2-2h-4v2h4v4h2V5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm16 14v-4h-2v4h-4v2h4c1.1 0 2-.9 2-2z' />
		</svg>
	)
}

export default SvgCropFree
