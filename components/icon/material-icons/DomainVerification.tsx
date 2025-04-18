import React, { SVGProps } from 'react'

const SvgDomainVerification = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M5 18h14V8H5v10zm3.82-6.42l2.12 2.12 4.24-4.24 1.41 1.41-5.66 5.66L7.4 13l1.42-1.42z'
				opacity={0.3}
			/>
			<path d='M16.6 10.88l-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z' />
			<path d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm0 14H5V8h14v10z' />
		</svg>
	)
}

export default SvgDomainVerification
