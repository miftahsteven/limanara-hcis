import React, { SVGProps } from 'react'

const SvgCarpenter = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5.71 5.62L7 4.33l8.49 8.49-2.81 2.81L5.71 5.62z' opacity={0.3} />
			<path d='M19.73 14.23L7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zM5.71 5.62L7 4.33l8.49 8.49-2.81 2.81L5.71 5.62zm8.36 14.26l-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z' />
		</svg>
	)
}

export default SvgCarpenter
