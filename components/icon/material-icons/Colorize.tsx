import React, { SVGProps } from 'react'

const SvgColorize = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M15.896 9.023l-.92-.92L17.67 5.41l.92.92z' opacity={0.3} />
			<path d='M20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19zm8.98-9.97l-.93-.93 2.69-2.69.92.92-2.68 2.7z' />
		</svg>
	)
}

export default SvgColorize
