import React, { SVGProps } from 'react'

const SvgFastRewind = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z' opacity={0.3} />
			<path d='M11 6l-8.5 6 8.5 6V6zm-2 8.14L5.97 12 9 9.86v4.28zM20 6l-8.5 6 8.5 6V6zm-2 8.14L14.97 12 18 9.86v4.28z' />
		</svg>
	)
}

export default SvgFastRewind
