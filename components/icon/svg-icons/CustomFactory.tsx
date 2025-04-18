import type { SVGProps } from 'react'
import * as React from 'react'

const SvgCustomFactory = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='currentColor'
		viewBox='0 0 24 24'
		className='svg-icon'
		{...props}>
		<path fill='none' d='M0 0h24v24H0z' />
		<path
			d='M12 12V9.95l-5 2V10l-3 1.32V20h16v-8h-8zm-3 6H7v-4h2v4zm4 0h-2v-4h2v4zm4 0h-2v-4h2v4z'
			opacity={0.3}
		/>
		<path d='M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z' />
	</svg>
)
export default SvgCustomFactory
