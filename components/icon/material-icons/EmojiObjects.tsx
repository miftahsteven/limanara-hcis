import React, { SVGProps } from 'react'

const SvgEmojiObjects = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M10 18h4v1h-4zM10 16h4v1h-4z' />
			<path d='M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 003.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0019 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm1.31-3.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z' />
			<g>
				<path d='M11.5 11h1v3h-1z' />
				<path d='M9.672 9.58l.707-.706 2.122 2.121-.707.707z' />
				<path d='M12.208 11.712l-.707-.707 2.121-2.121.707.707z' />
			</g>
		</svg>
	)
}

export default SvgEmojiObjects
