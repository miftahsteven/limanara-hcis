import React, { SVGProps } from 'react'

const SvgFeaturedPlayList = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 19h18V5H3v14zM5 7h9v2H5V7zm0 3h9v2H5v-2z' opacity={0.3} />
			<path d='M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z' />
		</svg>
	)
}

export default SvgFeaturedPlayList
