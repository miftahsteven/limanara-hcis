import React, { SVGProps } from 'react'

const SvgEject = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12 8.6L9.07 13h5.86z' opacity={0.3} />
			<path d='M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z' />
		</svg>
	)
}

export default SvgEject
