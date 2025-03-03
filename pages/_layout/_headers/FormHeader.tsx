import React from 'react'
import Header, { HeaderLeft } from '../../../layout/Header/Header'
import Navigation from '../../../layout/Navigation/Navigation'
import { componentPagesMenu } from '../../../menu'
import useDeviceScreen from '../../../hooks/useDeviceScreen'
import CommonHeaderRight from './CommonHeaderRight'

const FormHeader = () => {
	// @ts-ignore
	const deviceScreen = useDeviceScreen()
	return (
		<Header>
			<HeaderLeft>
				<Navigation
					menu={componentPagesMenu.forms.subMenu}
					id={`${componentPagesMenu.forms.id}top-menu`}
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

export default FormHeader
