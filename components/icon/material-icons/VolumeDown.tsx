import React, { SVGProps } from 'react'

const SvgVolumeDown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 13h2.83L12 15.17V8.83L9.83 11H7z' opacity={0.3} />
			<path d='M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0016 7.97zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z' />
		</svg>
	)
}

export default SvgVolumeDown
