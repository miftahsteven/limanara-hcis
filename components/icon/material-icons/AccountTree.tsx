import React, { SVGProps } from 'react'

const SvgAccountTree = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z' />
			<path opacity={0.3} d='M7 5v4H4V5h3M20 5v4h-3V5h3M20 15v4h-3v-4h3' />
		</svg>
	)
}

export default SvgAccountTree
