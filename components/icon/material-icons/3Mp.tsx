import React, { SVGProps } from 'react'

const Svg3Mp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M15 14h1.5v1.5H15z' />
			<path
				d='M5 19h14V5H5v14zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1zM10 10h3V9h-2V8h2V7h-3V5.5h3.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H10V10zm-4 3.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6v-5z'
				opacity={0.3}
			/>
			<path d='M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zM13.5 18.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z' />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
			<path d='M14.5 10.5v-4c0-.55-.45-1-1-1H10V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1z' />
		</svg>
	)
}

export default Svg3Mp
