import React, { SVGProps } from 'react'

const SvgCompassCalibration = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M4.94 7.26l2.21 2.21A9.05 9.05 0 0112 8.07c1.74 0 3.41.49 4.84 1.4l2.21-2.21A12.037 12.037 0 0012 5c-2.56 0-5.01.79-7.06 2.26z'
				opacity={0.3}
			/>
			<circle cx={12} cy={17} opacity={0.3} r={3} />
			<path d='M17 17c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-8 0c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zM2 7.15l5 5a7.06 7.06 0 0110-.01l5-5C19.44 4.59 15.9 3 12 3 8.1 3 4.56 4.59 2 7.15zm14.84 2.32c-1.44-.91-3.1-1.4-4.84-1.4-1.74 0-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5c2.56 0 5 .79 7.05 2.26l-2.21 2.21z' />
		</svg>
	)
}

export default SvgCompassCalibration
