import React, { SVGProps } from 'react'

const SvgLibraryMusic = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M8 16h12V4H8v12zm4.5-6c.57 0 1.08.19 1.5.51V5h4v2h-3v5.5a2.5 2.5 0 01-5 0 2.5 2.5 0 012.5-2.5z'
				opacity={0.3}
			/>
			<path d='M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1a2.5 2.5 0 002.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 000 5zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z' />
		</svg>
	)
}

export default SvgLibraryMusic
