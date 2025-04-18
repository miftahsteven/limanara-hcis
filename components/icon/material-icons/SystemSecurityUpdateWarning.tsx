import React, { SVGProps } from 'react'

const SvgSystemSecurityUpdateWarning = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M11 7h2v6h-2V7zm0 8h2v2h-2v-2z' opacity={0.3} />
			<path d='M11 15h2v2h-2zM11 7h2v6h-2z' />
			<path d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z' />
			<path d='M7 21h10v-1H7v1zM7 3v1h10V3H7z' opacity={0.3} />
		</svg>
	)
}

export default SvgSystemSecurityUpdateWarning
