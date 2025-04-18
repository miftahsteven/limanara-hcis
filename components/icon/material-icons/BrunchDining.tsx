import React, { SVGProps } from 'react'

const SvgBrunchDining = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M20 10h-2v1.47c0 .95.37 1.89 1.03 2.6.63-.71.97-1.61.97-2.56V10z'
				opacity={0.3}
			/>
			<path d='M2 21.5c0 .28.22.5.49.5h13.02c.27 0 .49-.22.49-.5V20H2v1.5zM20.47 15.45A5.796 5.796 0 0022 11.51V2h-6v9.47c0 1.48.58 2.92 1.6 4l.4.42V22h4v-2h-2v-4.03l.47-.52zM18 4h2v4h-2V4zm1.03 10.07a3.893 3.893 0 01-1.03-2.6V10h2v1.51c0 .95-.34 1.85-.97 2.56zM15.5 16H11v-2H7v2H2.5c-.28 0-.5.22-.5.5V18h14v-1.5c0-.28-.22-.5-.5-.5z' />
		</svg>
	)
}

export default SvgBrunchDining
