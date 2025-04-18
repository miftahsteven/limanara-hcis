import React, { SVGProps } from 'react'

const SvgPadding = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5 19h14V5H5v14zM15 7h2v2h-2V7zm-4 0h2v2h-2V7zM7 7h2v2H7V7z' opacity={0.3} />
			<path d='M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14z' />
			<path d='M15 7h2v2h-2zM7 7h2v2H7zM11 7h2v2h-2z' />
		</svg>
	)
}

export default SvgPadding
