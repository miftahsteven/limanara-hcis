import React, { SVGProps } from 'react'

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 17.97l5-2.15 5 2.15V5H7z' opacity={0.3} />
			<path d='M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97l-5-2.14-5 2.14V5h10v12.97z' />
		</svg>
	)
}

export default SvgBookmark
