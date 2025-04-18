import React, { SVGProps } from 'react'

const SvgHowToVote = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 19h14v1H5z' opacity={0.3} />
			<path d='M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 002-2v-4l-3-3zm1 7H5v-1h14v1z' />
			<path d='M12.048 12.905L8.505 9.362l4.95-4.95 3.543 3.543z' opacity={0.3} />
			<path d='M19.11 7.25L14.16 2.3a.975.975 0 00-1.4-.01L6.39 8.66a.996.996 0 000 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 000-1.41zm-7.06 5.65L8.51 9.36l4.95-4.95L17 7.95l-4.95 4.95z' />
		</svg>
	)
}

export default SvgHowToVote
