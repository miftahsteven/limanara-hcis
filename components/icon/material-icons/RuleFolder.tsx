import React, { SVGProps } from 'react'

const SvgRuleFolder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M11.17 8l-2-2H4v12h16V8h-8.83zm-3.34 8L5 13.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L7.83 16zM19 14.59L17.59 16 16 14.41 14.41 16 13 14.59 14.59 13 13 11.41 14.41 10 16 11.59 17.59 10 19 11.41 17.41 13 19 14.59z'
				opacity={0.3}
			/>
			<path d='M7.83 16L5 13.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L7.83 16zm9.58-3L19 14.59 17.59 16 16 14.41 14.41 16 13 14.59 14.59 13 13 11.41 14.41 10 16 11.59 17.59 10 19 11.41 17.41 13zM20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z' />
		</svg>
	)
}

export default SvgRuleFolder
