import React, { SVGProps } from 'react'

const SvgGolfCourse = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={19.5} cy={19.5} opacity={0.3} r={1.5} />
			<path
				d='M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z'
				opacity={0.3}
			/>
			<circle cx={19.5} cy={19.5} r={1.5} />
			<path d='M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z' />
		</svg>
	)
}

export default SvgGolfCourse
