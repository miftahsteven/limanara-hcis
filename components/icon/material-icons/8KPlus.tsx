import React, { SVGProps } from 'react'

const Svg8KPlus = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M7.5 12.5h1V14h-1zM7.5 10h1v1.5h-1z' />
			<path
				d='M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5v14zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11V9zm-5 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4z'
				opacity={0.3}
			/>
			<path d='M7 15h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1v1.5h-1V10zm0 2.5h1V14h-1v-1.5z' />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z' />
			<path d='M12.5 12.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z' />
		</svg>
	)
}

export default Svg8KPlus
