import React, { SVGProps } from 'react'

const SvgGroupAdd = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 15v-3h3v-2H5V7H3v3H0v2h3v3z' />
			<circle cx={12} cy={8.5} opacity={0.3} r={1.5} />
			<path
				d='M7.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z'
				opacity={0.3}
			/>
			<path d='M12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0-5c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7zm0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM7.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H7.34zM17 12c1.93 0 3.5-1.57 3.5-3.5S18.93 5 17 5c-.24 0-.48.02-.71.07a5.416 5.416 0 01-.02 6.85c.24.05.48.08.73.08zm2.32 2.02c1 .81 1.68 1.87 1.68 3.23V19h3v-1.75c0-1.69-2.44-2.76-4.68-3.23z' />
		</svg>
	)
}

export default SvgGroupAdd
