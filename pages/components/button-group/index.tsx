import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import PageWrapper from '../../../layout/PageWrapper/PageWrapper'
import { componentPagesMenu } from '../../../menu'
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader'
import Breadcrumb from '../../../components/bootstrap/Breadcrumb'
import Page from '../../../layout/Page/Page'
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card'
import CommonStoryBtn from '../../../common/partial/other/CommonStoryBtn'
import CommonHowToUse from '../../../common/partial/other/CommonHowToUse'
import Button, { ButtonGroup } from '../../../components/bootstrap/Button'
import { AlertLink } from '../../../components/bootstrap/Alert'
import CommonDesc from '../../../common/partial/other/CommonDesc'

const Index: NextPage = () => {
	const GENERAL_USAGE = `
<ButtonGroup
	className={ String }
	isToolbar={ Boolean }
	isVertical={ Boolean }
	size={ String } // 'sm' || 'lg'
	ariaLabel={ String }
	{...props}>
	<Button {...props}>...</Button>
	<Button {...props}>...</Button>
	...
</ButtonGroup>`

	const GENERAL_USAGE_2 = `
<ButtonGroup
	className={ String }
	isToolbar={ true } //* Required
	isVertical={ Boolean }
	size={ null } //* Required
	ariaLabel={ String }
	{...props}>
	<ButtonGroup {...props}>
		<Button {...props}>...</Button>
		<Button {...props}>...</Button>
		...
	</ButtonGroup>
	
	<ButtonGroup {...props}>
		<Button {...props}>...</Button>
		<Button {...props}>...</Button>
		...
	</ButtonGroup>
</ButtonGroup>`

	return (
		<PageWrapper>
			<Head>
				<title>{componentPagesMenu.components.subMenu.buttonGroup.text}</title>
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentPagesMenu.components.text,
								to: `/${componentPagesMenu.components.path}`,
							},
							{
								title: componentPagesMenu.components.subMenu.buttonGroup.text,
								to: `/${componentPagesMenu.components.subMenu.buttonGroup.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/components-buttongroup--default' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{/* General Usage */}
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-xl-6'>
										<CardCodeView className='h-100'>
											{GENERAL_USAGE}
										</CardCodeView>
									</div>
									<div className='col-xl-6'>
										<CardCodeView className='h-100'>
											{GENERAL_USAGE_2}
										</CardCodeView>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='info'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>ButtonGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-buttongroup-props-size--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['sm', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3 align-items-center'>
									<div className='col-auto'>
										<ButtonGroup size='sm'>
											<Button color='primary'>Button 1</Button>
											<Button color='primary'>Button 2</Button>
											<Button color='primary'>Button 3</Button>
										</ButtonGroup>
									</div>
									<div className='col-auto'>
										<ButtonGroup>
											<Button color='primary'>Button 1</Button>
											<Button color='primary'>Button 2</Button>
											<Button color='primary'>Button 3</Button>
										</ButtonGroup>
									</div>
									<div className='col-auto'>
										<ButtonGroup size='lg'>
											<Button color='primary'>Button 1</Button>
											<Button color='primary'>Button 2</Button>
											<Button color='primary'>Button 3</Button>
										</ButtonGroup>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* isVertical */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='warning'>
									<CardTitle>isVertical</CardTitle>
									<CardSubTitle>ButtonGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-color--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isVertical: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ButtonGroup isVertical>
									<Button color='primary'>Button 1</Button>
									<Button color='primary'>Button 2</Button>
									<Button color='primary'>Button 3</Button>
								</ButtonGroup>
							</CardBody>
						</Card>
					</div>

					{/* isToolbar */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewSidebar' iconColor='danger'>
									<CardTitle>isToolbar</CardTitle>
									<CardSubTitle>ButtonGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-buttongroup-props-istoolbar--true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isToolbar: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ButtonGroup isToolbar>
									<ButtonGroup>
										<Button color='primary'>Button 1</Button>
										<Button color='primary'>Button 2</Button>
										<Button color='primary'>Button 3</Button>
									</ButtonGroup>
									<ButtonGroup>
										<Button color='info'>Button 1</Button>
										<Button color='info'>Button 2</Button>
									</ButtonGroup>
								</ButtonGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<code>size</code> will have no effect if <code>IsToolbar</code>{' '}
									value is true.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* Example */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AutoFixHigh'>
									<CardTitle tag='h4'>Example</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CommonDesc className='mb-4'>
									You can make different styles with the props of the{' '}
									<AlertLink to='components/button'>button</AlertLink> component.
								</CommonDesc>
								<Card isCompact>
									<CardHeader>
										<CardLabel>
											<CardTitle>isOutline</CardTitle>
											<CardSubTitle>Button</CardSubTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<ButtonGroup>
											<Button color='primary' isOutline>
												Button 1
											</Button>
											<Button color='primary' isOutline>
												Button 2
											</Button>
											<Button color='primary' isOutline>
												Button 3
											</Button>
										</ButtonGroup>
									</CardBody>
								</Card>
								<Card isCompact>
									<CardHeader>
										<CardLabel>
											<CardTitle>color</CardTitle>
											<CardSubTitle>Button</CardSubTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<ButtonGroup>
											<Button color='primary'>Button 1</Button>
											<Button color='secondary'>Button 2</Button>
											<Button color='warning'>Button 3</Button>
										</ButtonGroup>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
})

export default Index
