import React, { SVGProps } from 'react'

const SvgDryCleaning = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M9 15h6v5H9z' />
			<path d='M19.56 11.36L13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1 .45-1 1-1 1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95-1.18.22-2.15 1.17-2.38 2.35-.3 1.56.6 2.94 1.94 3.42v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v6h10v-6h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM15 20H9v-5h6v5zm3.58-6H17v-1H7v1H5.42c-.46 0-.58-.65-.17-.81l6.75-3 6.75 3c.42.19.28.81-.17.81z' />
		</svg>
	)
}

export default SvgDryCleaning
