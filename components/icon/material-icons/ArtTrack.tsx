import React, { SVGProps } from 'react'

const SvgArtTrack = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14 7h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM4 17h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2zm1.25-4.25l1.25 1.51L8.25 12l2.25 3h-7l1.75-2.25z' />
		</svg>
	)
}

export default SvgArtTrack
