import React, { SVGProps } from 'react'

const SvgCellWifi = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M6 22h16V5.97L6 22zm14-2h-2v-7.22l2-2V20zM5.22 7.22L3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0zm7.71 3.85L11 13l-1.93-1.93a2.74 2.74 0 013.86 0zm1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5a6.374 6.374 0 019 0l-1.28 1.29z' />
		</svg>
	)
}

export default SvgCellWifi
