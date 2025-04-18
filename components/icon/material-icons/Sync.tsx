import React, { SVGProps } from 'react'

const SvgSync = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M.01 0h24v24h-24V0z' fill='none' />
			<path d='M12.01 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020.01 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.25 7.74A7.93 7.93 0 004.01 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z' />
		</svg>
	)
}

export default SvgSync
