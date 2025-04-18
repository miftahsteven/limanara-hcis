import React, { SVGProps } from 'react'

const SvgInsertInvitation = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19 5H5v2h14z' opacity={0.3} />
			<path d='M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2zM5 7V5h14v2H5zm0 2h14v10H5V9zm7 3h5v5h-5z' />
		</svg>
	)
}

export default SvgInsertInvitation
