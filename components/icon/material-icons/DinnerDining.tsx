import React, { SVGProps } from 'react'

const SvgDinnerDining = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M17.08 15.14A3.44 3.44 0 0014.5 14c-1.35 0-2.58.79-3.16 2h6.32c-.14-.31-.34-.6-.58-.86z'
				opacity={0.3}
			/>
			<path d='M2 19l2 2h16l2-2zM3 18h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h9v-1.5h-9C12 4.01 10.99 3 9.75 3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zm11.5-4c.99 0 1.91.4 2.58 1.14.24.26.44.55.58.86h-6.32c.58-1.21 1.81-2 3.16-2zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z' />
		</svg>
	)
}

export default SvgDinnerDining
