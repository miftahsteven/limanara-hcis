import React, { SVGProps } from 'react'

const SvgHdrEnhancedSelect = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm3 5h-2v2h-2V9H9V7h2V5h2v2h2v2z'
				opacity={0.3}
			/>
			<path d='M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z' />
			<path d='M13 5h-2v2H9v2h2v2h2V9h2V7h-2zM3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zM22 18.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM16.5 16H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1zM10 16H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3z' />
		</svg>
	)
}

export default SvgHdrEnhancedSelect
