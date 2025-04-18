import React, { SVGProps } from 'react'

const SvgSignalWifiStatusbar2Bar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M19.77 13.22L24 8.98A16.88 16.88 0 0012 4C7.31 4 3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10s5.78 1.23 7.77 3.22z'
				fillOpacity={0.3}
			/>
			<path d='M19.77 13.22C17.78 11.23 15.03 10 12 10s-5.78 1.23-7.77 3.22L12 21l7.77-7.78z' />
		</svg>
	)
}

export default SvgSignalWifiStatusbar2Bar
