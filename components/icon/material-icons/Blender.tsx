import React, { SVGProps } from 'react'

const SvgBlender = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M13 16h-2c-1.65 0-3 1.35-3 3v1h8v-1c0-1.65-1.35-3-3-3zm-1 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
				opacity={0.3}
			/>
			<path d='M16.13 15.13L18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4l-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z' />
			<circle cx={12} cy={18} r={1} />
		</svg>
	)
}

export default SvgBlender
