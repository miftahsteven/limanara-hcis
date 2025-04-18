import React, { SVGProps } from 'react'

const SvgAddBusiness = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M15.36 9H3.64l-.6 3h12.92z' />
			<path d='M2 4h15v2H2zM15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6l.6-3h11.72l.6 3H3.04z' />
			<path d='M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z' />
		</svg>
	)
}

export default SvgAddBusiness
