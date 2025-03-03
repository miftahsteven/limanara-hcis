import React, { SVGProps } from 'react'

const SvgSyncDisabled = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none' />
			<path d='M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24A6.003 6.003 0 0118 12c0 .85-.19 1.65-.51 2.38l1.5 1.5A7.921 7.921 0 0020 12zM4.27 4L2.86 5.41l2.36 2.36a7.925 7.925 0 001.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 016 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41L4.27 4z' />
		</svg>
	)
}

export default SvgSyncDisabled
