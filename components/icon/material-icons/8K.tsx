import React, { SVGProps } from 'react'

const Svg8K = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M8 10h1.5v1.5H8zM8 12.5h1.5V14H8z' />
			<path
				d='M5 19h14V5H5v14zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13V9zm-6.5 1c0-.55.45-1 1-1H10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1v-4z'
				opacity={0.3}
			/>
			<path d='M7.5 15H10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1.5v1.5H8V10zm0 2.5h1.5V14H8v-1.5z' />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
			<path d='M14.5 12.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z' />
		</svg>
	)
}

export default Svg8K
