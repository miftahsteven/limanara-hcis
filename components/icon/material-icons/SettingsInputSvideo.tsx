import React, { SVGProps } from 'react'

const SvgSettingsInputSvideo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm-7 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zM8.5 18c-.83 0-1.5-.67-1.5-1.5S7.67 15 8.5 15s1.5.67 1.5 1.5S9.33 18 8.5 18zm2-10C9.67 8 9 7.33 9 6.5S9.67 5 10.5 5h3c.83 0 1.5.67 1.5 1.5S14.33 8 13.5 8h-3zm5 10c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
				opacity={0.3}
			/>
			<path d='M15 6.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5z' />
			<circle cx={15.5} cy={16.5} r={1.5} />
			<circle cx={17.5} cy={11.5} r={1.5} />
			<path d='M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9z' />
			<circle cx={6.5} cy={11.5} r={1.5} />
			<circle cx={8.5} cy={16.5} r={1.5} />
		</svg>
	)
}

export default SvgSettingsInputSvideo
