import React, { SVGProps } from 'react'

const SvgFilter9Plus = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M7 17h14v-6h-2v2h-2v-2h-2V9h2V7h2v2h2V3H7v14zm2-5h3v-1h-1a2 2 0 01-2-2V8a2 2 0 012-2h1a2 2 0 012 2v4a2 2 0 01-2 2H9v-2z'
				opacity={0.3}
			/>
			<path d='M19 21H3V5H1v16c0 1.1.9 2 2 2h16v-2z' />
			<path d='M11 8h1v1h-1z' opacity={0.3} />
			<path d='M12 6h-1a2 2 0 00-2 2v1a2 2 0 002 2h1v1H9v2h3a2 2 0 002-2V8a2 2 0 00-2-2zm0 3h-1V8h1v1zm9-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z' />
		</svg>
	)
}

export default SvgFilter9Plus
