import React, { SVGProps } from 'react'

const SvgFiberDvr = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M20 11.56v-.89c0-.76-.58-1.33-1.33-1.33h-3.11v5.33h1.33v-1.78h1.02l.76 1.78H20l-.8-1.87c.44-.22.8-.71.8-1.24zm-1.33 0h-1.78v-.89h1.78v.89zM7.11 9.33H4v5.33h3.11c.76 0 1.33-.58 1.33-1.33v-2.67c0-.75-.57-1.33-1.33-1.33zm0 4H5.33v-2.67h1.78v2.67zm7-4h-1.34l-.89 3.05L11 9.33H9.66l1.56 5.34h1.33z' />
			<path d='M3 5h18v14H3z' opacity={0.3} />
			<path d='M21 3H3c-1.11 0-2 .89-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5c0-1.11-.89-2-2-2zm0 16H3V5h18v14z' />
		</svg>
	)
}

export default SvgFiberDvr
