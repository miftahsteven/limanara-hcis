import React, { SVGProps } from 'react'

const SvgRestorePage = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M6 4v16h12V8.83L13.17 4H6zm10.72 9c0 2.48-2.02 4.5-4.5 4.5a4.51 4.51 0 01-4.12-2.7h1.54c.57.81 1.51 1.35 2.58 1.35a3.15 3.15 0 100-6.3c-1.21 0-2.27.7-2.79 1.71L10.88 13h-3.6V9.4l1.17 1.17c.8-1.24 2.19-2.07 3.78-2.07 2.48 0 4.49 2.02 4.49 4.5z'
				opacity={0.3}
			/>
			<path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7.17L18 8.83V20zm-9.55-9.43L7.28 9.4V13h3.6l-1.44-1.44a3.15 3.15 0 012.79-1.71 3.15 3.15 0 110 6.3 3.14 3.14 0 01-2.58-1.35H8.1a4.51 4.51 0 004.12 2.7c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5c-1.59 0-2.97.83-3.77 2.07z' />
		</svg>
	)
}

export default SvgRestorePage
