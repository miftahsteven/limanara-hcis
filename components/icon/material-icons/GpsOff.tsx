import React, { SVGProps } from 'react'

const SvgGpsOff = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M20.94 11A8.994 8.994 0 0013 3.06V1h-2v2.06c-.98.11-1.91.38-2.77.78l1.53 1.53a6.995 6.995 0 018.87 8.87l1.53 1.53c.4-.86.67-1.79.78-2.77H23v-2h-2.06zM3 4.27l2.04 2.04A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21l1.41-1.41L4.41 2.86 3 4.27zm13.27 13.27a6.995 6.995 0 01-9.81-9.81l9.81 9.81z' />
		</svg>
	)
}

export default SvgGpsOff
