import React, { SVGProps } from 'react'

const SvgEuroSymbol = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M15 18.5A6.48 6.48 0 019.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.491 6.491 0 0115 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0015 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 000 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z' />
		</svg>
	)
}

export default SvgEuroSymbol
