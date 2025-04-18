import React, { SVGProps } from 'react'

const SvgBookmarkRemove = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M17 17.97V10.9A5 5 0 0113 6c0-.34.03-.68.1-1H7v12.97l5-2.14 5 2.14z'
				opacity={0.3}
			/>
			<path d='M21 7h-6V5h6v2zm-4 10.97l-5-2.14-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9c-.32.07-.66.1-1 .1-.34 0-.68-.03-1-.1v7.07z' />
		</svg>
	)
}

export default SvgBookmarkRemove
