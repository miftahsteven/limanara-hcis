import React, { SVGProps } from 'react'

const SvgAssistantDirection = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M12 3c-4.99 0-9 4.01-9 9s4.01 9 9 9 9-4.01 9-9-4.01-9-9-9zm.54 16.8c-.35.27-.79.27-1.15 0L4.2 12.58a.932.932 0 010-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16l-7.19 7.22z'
				opacity={0.3}
			/>
			<path d='M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-4.99 0-9-4.01-9-9s4.01-9 9-9 9 4.01 9 9-4.01 9-9 9z' />
			<path d='M19.73 11.42L12.54 4.2c-.36-.27-.8-.27-1.15 0L4.2 11.42c-.27.36-.27.8 0 1.16l7.19 7.22c.36.27.8.27 1.15 0l7.19-7.22c.36-.36.36-.89 0-1.16zM13.5 14.5V12H10v3H8v-4c0-.6.4-1 1-1h4.5V7.5L17 11l-3.5 3.5z' />
		</svg>
	)
}

export default SvgAssistantDirection
