import React, { SVGProps } from 'react'

const SvgDownloadForOffline = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 6V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z'
				opacity={0.3}
			/>
			<path d='M16 10h-3V6h-2v4H8l4 4zM7 15h10v2H7z' />
			<path d='M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
		</svg>
	)
}

export default SvgDownloadForOffline
