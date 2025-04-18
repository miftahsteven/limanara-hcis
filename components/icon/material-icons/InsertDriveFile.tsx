import React, { SVGProps } from 'react'

const SvgInsertDriveFile = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M13 4H6v16h12V9h-5z' opacity={0.3} />
			<path d='M20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm-2 12H6V4h7v5h5v11z' />
		</svg>
	)
}

export default SvgInsertDriveFile
