import React, { SVGProps } from 'react'

const SvgAddPhotoAlternate = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z' />
			<path
				d='M16.5 18h-11l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18zM17 7h-3V6H4v14h14V10h-1V7z'
				opacity={0.3}
			/>
			<path d='M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2v10z' />
		</svg>
	)
}

export default SvgAddPhotoAlternate
