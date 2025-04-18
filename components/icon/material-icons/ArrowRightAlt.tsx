import React, { SVGProps } from 'react'

const SvgArrowRightAlt = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z' />
		</svg>
	)
}

export default SvgArrowRightAlt
