import React, { SVGProps } from 'react'

const SvgConfirmationNumber = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path
				d='M4.01 8.54C5.2 9.23 6 10.52 6 12s-.81 2.77-2 3.46V18h16v-2.54c-1.19-.69-2-1.99-2-3.46s.81-2.77 2-3.46V6H4l.01 2.54zM11 7h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z'
				opacity={0.3}
			/>
			<path d='M22 10V6a2 2 0 00-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z' />
		</svg>
	)
}

export default SvgConfirmationNumber
