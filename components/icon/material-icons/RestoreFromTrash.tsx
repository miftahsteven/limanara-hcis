import React, { SVGProps } from 'react'

const SvgRestoreFromTrash = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 14h-2v4h-4v-4H8v5h8zm0 0V9H8v5l4-4z' opacity={0.3} />
			<path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2-5V9h8v10H8v-5zm7.5-10l-1-1h-5l-1 1H5v2h14V4zM10 18h4v-4h2l-4-4-4 4h2z' />
		</svg>
	)
}

export default SvgRestoreFromTrash
