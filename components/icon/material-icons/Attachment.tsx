import React, { SVGProps } from 'react'

const SvgAttachment = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5a2.5 2.5 0 010 5H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9a2.5 2.5 0 000 5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5V16z' />
		</svg>
	)
}

export default SvgAttachment
