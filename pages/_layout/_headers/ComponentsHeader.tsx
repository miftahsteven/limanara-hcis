import React from 'react'
import Header, { HeaderLeft } from '../../../layout/Header/Header'
import Navigation from '../../../layout/Navigation/Navigation'
import { componentPagesMenu } from '../../../menu'
import useDeviceScreen from '../../../hooks/useDeviceScreen'
import CommonHeaderRight from './CommonHeaderRight'

const ComponentsHeader = () => {
	// @ts-ignore
	const deviceScreen = useDeviceScreen()

	return (
		<Header>
			<HeaderLeft>
				<Navigation
					menu={componentPagesMenu.components.subMenu}
					id={`${componentPagesMenu.components.id}top-menu`}
					horizontal={
						!!deviceScreen?.width &&
						deviceScreen.width >= Number(process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT_SIZE)
					}
				/>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	)
}

export default ComponentsHeader
