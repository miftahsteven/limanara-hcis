import React, { SVGProps } from 'react'

const SvgLaptopChromebook = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M4 5h16v10H4z' opacity={0.3} />
			<path d='M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z' />
		</svg>
	)
}

export default SvgLaptopChromebook
