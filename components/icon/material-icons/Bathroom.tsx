import React, { SVGProps } from 'react'

const SvgBathroom = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M4 20h16V4H4v16zm5-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7v-1z'
				opacity={0.3}
			/>
			<circle cx={15} cy={14} r={1} />
			<circle cx={12} cy={14} r={1} />
			<circle cx={15} cy={17} r={1} />
			<path d='M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z' />
			<path d='M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10v-1zm-8.46-.5c.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3H8.54z' />
			<circle cx={9} cy={17} r={1} />
			<circle cx={9} cy={14} r={1} />
			<circle cx={12} cy={17} r={1} />
		</svg>
	)
}

export default SvgBathroom
