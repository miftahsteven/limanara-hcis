import React, { SVGProps } from 'react'

const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 10l5 5 5-5H7z' />
		</svg>
	)
}

export default SvgArrowDropDown
