import React, { SVGProps } from 'react'

const SvgScreenShare = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M20 16V6H4v10.01L20 16zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z'
				opacity={0.3}
			/>
			<path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 00-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 002 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z' />
		</svg>
	)
}

export default SvgScreenShare
