import React, { SVGProps } from 'react'

const SvgEdgesensorHigh = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path opacity={0.3} d='M8 4h8v1H8zM8 19h8v1H8z' />
			<path d='M16 2.01L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zm0-12H8V4h8v1zM19 10h2v7h-2zM22 7h2v7h-2zM3 7h2v7H3zM0 10h2v7H0z' />
		</svg>
	)
}

export default SvgEdgesensorHigh
