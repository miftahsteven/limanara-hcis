import React, { SVGProps } from 'react'

const SvgEco = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M7.46 9.46c-1.78 1.79-1.91 4.58-.43 6.54 1.53-2.54 3.73-4.64 6.37-6a15.994 15.994 0 00-4.88 7.32c.75.43 1.59.68 2.48.68 1.34 0 2.59-.52 3.54-1.46 1.74-1.74 2.81-6.57 3.26-10.33-3.76.44-8.59 1.51-10.34 3.25z'
				opacity={0.3}
			/>
			<path d='M6.05 8.05a7.007 7.007 0 000 9.9C7.42 19.32 9.21 20 11 20s3.58-.68 4.95-2.05C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05zm8.49 8.49c-.95.94-2.2 1.46-3.54 1.46-.89 0-1.73-.25-2.48-.68.92-2.88 2.62-5.41 4.88-7.32-2.63 1.36-4.84 3.46-6.37 6-1.48-1.96-1.35-4.75.44-6.54C9.21 7.72 14.04 6.65 17.8 6.2c-.45 3.76-1.52 8.59-3.26 10.34z' />
		</svg>
	)
}

export default SvgEco
