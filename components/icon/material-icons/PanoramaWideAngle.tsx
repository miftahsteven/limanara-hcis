import React, { SVGProps } from 'react'

const SvgPanoramaWideAngle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M12 6c-2.45 0-4.71.2-7.29.64A21 21 0 004 12a21 21 0 00.71 5.36c2.58.44 4.84.64 7.29.64s4.71-.2 7.29-.64A21 21 0 0020 12a21 21 0 00-.71-5.36C16.71 6.2 14.45 6 12 6z'
				opacity={0.3}
			/>
			<path d='M21.13 5.78l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4s-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22zm-1.84 11.58c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64A21 21 0 014 12a21 21 0 01.71-5.36C7.29 6.2 9.55 6 12 6s4.71.2 7.29.64A21 21 0 0120 12a21 21 0 01-.71 5.36z' />
		</svg>
	)
}

export default SvgPanoramaWideAngle
