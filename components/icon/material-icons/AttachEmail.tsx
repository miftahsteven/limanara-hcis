import React, { SVGProps } from 'react'

const SvgAttachEmail = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M3 6l8 5 8-5v3h2V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h10v-2H3V6zm16-2l-8 5-8-5h16z' />
			<path d='M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 00-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z' />
		</svg>
	)
}

export default SvgAttachEmail
