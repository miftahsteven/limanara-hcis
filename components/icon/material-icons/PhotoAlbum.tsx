import React, { SVGProps } from 'react'

const SvgPhotoAlbum = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M13 13l-3-2.25L7 13V4H6v16h12V4h-5v9zm4 6H7l2.5-3.19 1.78 2.15 2.5-3.22L17 19z'
				opacity={0.3}
			/>
			<path d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16zm-8.5-4.19L7 19h10l-3.22-4.26-2.5 3.22z' />
		</svg>
	)
}

export default SvgPhotoAlbum
