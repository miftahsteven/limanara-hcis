import React, { SVGProps } from 'react'

const SvgDonutLarge = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M13 5.08A7 7 0 0118.92 11h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13A7 7 0 0113 18.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z' />
		</svg>
	)
}

export default SvgDonutLarge
