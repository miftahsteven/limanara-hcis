import React, { SVGProps } from 'react'

const SvgFlaky = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M14.05 17.58l-.01.01-2.4-2.4 1.06-1.06 1.35 1.35L16.54 13l1.06 1.06-3.54 3.54-.01-.02zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM7.34 6.28l1.41 1.41 1.41-1.41 1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.41-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.41 1.06-1.06zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8z'
				fillRule='evenodd'
			/>
		</svg>
	)
}

export default SvgFlaky
