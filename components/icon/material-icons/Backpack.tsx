import React, { SVGProps } from 'react'

const SvgBackpack = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zM7.5 12v2h7v2h2v-4h-9z'
				opacity={0.3}
			/>
			<path d='M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86zM18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zM7.5 12v2h7v2h2v-4h-9z' />
		</svg>
	)
}

export default SvgBackpack
