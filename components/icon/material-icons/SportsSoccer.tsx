import React, { SVGProps } from 'react'

const SvgSportsSoccer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M7.01 9.49L11 6.7V5.3l-1.35-.95a8.103 8.103 0 00-4.38 3.34l.39 1.34 1.35.46zM5.01 10.92l-1 .73c0 .12-.01.23-.01.35 0 1.99.73 3.81 1.94 5.21l1.14-.1.79-1.37L6.4 11.4l-1.39-.48zM18.34 9.03l.39-1.34a8.067 8.067 0 00-4.38-3.34L13 5.3v1.4l3.99 2.79 1.35-.46zM8.37 10.98L9.73 15h4.54l1.36-4.02L12 8.44zM9.45 17l-.64 1.11.69 1.49c.79.25 1.63.4 2.5.4s1.71-.15 2.5-.41l.69-1.49-.64-1.1h-5.1zM19.98 11.65l-1-.73-1.38.48-1.46 4.34.79 1.37 1.14.1C19.27 15.81 20 13.99 20 12c0-.12-.01-.23-.02-.35z'
				opacity={0.3}
			/>
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3l1.35-.95a8.01 8.01 0 014.38 3.34l-.39 1.34-1.35.46L13 6.7V5.3zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34a8.103 8.103 0 014.38-3.34zM7.08 17.11l-1.14.1A7.938 7.938 0 014 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34-.78 1.37zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11-.7 1.48zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54L14.27 15zm3.79 2.21l-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21z' />
		</svg>
	)
}

export default SvgSportsSoccer
