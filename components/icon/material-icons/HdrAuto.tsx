import React, { SVGProps } from 'react'

const SvgHdrAuto = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path opacity={0.3} d='M12.04 8.04h-.09l-1.6 4.55h3.29z' />
			<path
				d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3.21 13l-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z'
				opacity={0.3}
			/>
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
			<path d='M11.01 6L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59l1.6-4.55h.09l1.6 4.55h-3.29z' />
		</svg>
	)
}

export default SvgHdrAuto
