import React, { SVGProps } from 'react'

const SvgBlurLinear = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z' />
			<circle cx={9} cy={12} r={1} />
			<circle cx={13} cy={8} r={1} />
			<circle cx={13} cy={16} r={1} />
			<path d='M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z' />
			<circle cx={13} cy={12} r={1} />
			<path d='M3 3h18v2H3z' />
			<circle cx={5} cy={8} r={1.5} />
			<circle cx={5} cy={12} r={1.5} />
			<circle cx={5} cy={16} r={1.5} />
			<path d='M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z' />
			<circle cx={9} cy={16} r={1} />
			<circle cx={9} cy={8} r={1} />
			<path d='M3 19h18v2H3z' />
		</svg>
	)
}

export default SvgBlurLinear
