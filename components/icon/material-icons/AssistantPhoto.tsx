import React, { SVGProps } from 'react'

const SvgAssistantPhoto = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14.24 12l.4 2H18V8h-5.24l-.4-2H7v6z' opacity={0.3} />
			<path d='M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2v-7zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7V6z' />
		</svg>
	)
}

export default SvgAssistantPhoto
