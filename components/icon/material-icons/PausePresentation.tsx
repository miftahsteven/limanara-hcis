import React, { SVGProps } from 'react'

const SvgPausePresentation = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 19h18V5H3v14zM13 8h2v8h-2V8zM9 8h2v8H9V8z' opacity={0.3} />
			<path d='M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z' />
		</svg>
	)
}

export default SvgPausePresentation
