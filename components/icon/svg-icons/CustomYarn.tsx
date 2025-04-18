import type { SVGProps } from 'react'
import * as React from 'react'

const SvgCustomYarn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='#117cad'
		aria-label='Yarn'
		viewBox='0 0 512 512'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<rect width={512} height={512} rx='15%' />
		<path
			stroke='#fff'
			strokeWidth={16}
			d='M411 310c-23-4-70 34-82 34 0 0 11-53-33-102 43-61 32-120 24-137-10-19-24-7-24-7s-24-75-56 2c-39-2-47 25-72 35-27 31 1 68 1 68-37 30-46 78-44 95-27 19-24 79-3 86-9 21 21 38 53 21 0 0 8 13 20 14 31 2 101-2 110-15 28-2 93-52 111-51 21 2 34-40-5-43'
		/>
		<path fill='#fff' d='M172 399c8-7 12-32 12-32l11 10s-20 10-10 28l-13-6' />
	</svg>
)
export default SvgCustomYarn
