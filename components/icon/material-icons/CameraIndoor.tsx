import React, { SVGProps } from 'react'

const SvgCameraIndoor = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M6 10v9h12v-9l-6-4.5L6 10zm8 2v1l2-1.06v4.12L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1z'
				opacity={0.3}
			/>
			<path d='M8 12v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1z' />
			<path d='M12 3L4 9v12h16V9l-8-6zm6 16H6v-9l6-4.5 6 4.5v9z' />
		</svg>
	)
}

export default SvgCameraIndoor
