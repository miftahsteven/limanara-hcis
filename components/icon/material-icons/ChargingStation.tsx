import React, { SVGProps } from 'react'

const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M17 3v1H7V3h10m0 17H7v1h10v-1' opacity={0.3} />
			<path d='M14.5 11l-3 6v-4h-2l3-6v4h2zM17 3H7v1h10V3m0 17H7v1h10v-1m0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10zM7 18h10V6H7v12z' />
		</svg>
	)
}

export default SvgChargingStation
