import React, { SVGProps } from 'react'

const SvgEditRoad = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M15.55 17.42v1.03h1.03L20.03 15 19 13.97z' />
			<path d='M18 4h-2v7.9l2-2zM4 4h2v16H4zM10 4h2v4h-2zM10 10h2v4h-2zM10 16h2v4h-2zM22.56 12.59l-1.15-1.15a1.49 1.49 0 00-2.12 0L14 16.73V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12zm-5.98 5.86h-1.03v-1.03L19 13.97 20.03 15l-3.45 3.45z' />
		</svg>
	)
}

export default SvgEditRoad
