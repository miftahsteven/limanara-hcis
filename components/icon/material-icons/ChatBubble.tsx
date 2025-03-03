import React, { SVGProps } from 'react'

const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M4 18l2-2h14V4H4z' opacity={0.3} />
			<path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z' />
		</svg>
	)
}

export default SvgChatBubble
