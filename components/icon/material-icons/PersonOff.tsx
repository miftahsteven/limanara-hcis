import React, { SVGProps } from 'react'

const SvgPersonOff = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M15.17 18l-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h9.17zM10.13 7.3A1.99 1.99 0 0112 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87'
				opacity={0.3}
			/>
			<path d='M20 17.17l-3.37-3.38c.64.22 1.23.48 1.77.76.97.51 1.58 1.52 1.6 2.62zm1.19 4.02l-1.41 1.41-2.61-2.6H4v-2.78c0-1.12.61-2.15 1.61-2.66 1.29-.66 2.87-1.22 4.67-1.45L1.39 4.22 2.8 2.81l18.39 18.38zM15.17 18l-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h9.17zM12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87l1.48 1.48a3.999 3.999 0 10-5.53-5.53l1.48 1.48A1.99 1.99 0 0112 6z' />
		</svg>
	)
}

export default SvgPersonOff
