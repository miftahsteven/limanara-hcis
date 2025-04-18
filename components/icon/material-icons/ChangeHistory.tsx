import React, { SVGProps } from 'react'

const SvgChangeHistory = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12 7.77L5.61 18h12.78z' opacity={0.3} />
			<path d='M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z' />
		</svg>
	)
}

export default SvgChangeHistory
