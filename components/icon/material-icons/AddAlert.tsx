import React, { SVGProps } from 'react'

const SvgAddAlert = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path
				d='M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5zm4 7h-3v3h-2v-3H8v-2h3V8h2v3h3v2z'
				opacity={0.3}
			/>
			<path d='M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99zm7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5v7zm-4-7V8h-2v3H8v2h3v3h2v-3h3v-2z' />
		</svg>
	)
}

export default SvgAddAlert
