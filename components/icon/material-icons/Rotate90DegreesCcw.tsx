import React, { SVGProps } from 'react'

const SvgRotate90DegreesCcw = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7.35 9.24L3.69 12.9l3.65 3.66L11 12.9z' opacity={0.3} />
			<path d='M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zm0 10.15L3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66zm12.02-9.92A8.95 8.95 0 0013 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 010 9.9 6.973 6.973 0 01-7.79 1.44l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 000-12.72z' />
		</svg>
	)
}

export default SvgRotate90DegreesCcw
