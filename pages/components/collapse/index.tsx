import React, { useState } from 'react'
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
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card'
import CommonStoryBtn from '../../../common/partial/other/CommonStoryBtn'
import CommonHowToUse from '../../../common/partial/other/CommonHowToUse'
import Collapse from '../../../components/bootstrap/Collapse'
import Button from '../../../components/bootstrap/Button'

const Index: NextPage = () => {
	const GENERAL_USAGE = `const [state, setState] = useState(false);`

	const GENERAL_USAGE_2 = `
<Button 
	onClick={ Function } // Example: ()=> setState(!state) 
	{...props}>
	...
</Button>
<Collapse 
	tag={ String }
	isChildClone={ Boolean }
	isOpen={ Boolean } // Example: state
	className={ String }
	{...props}>
	... { // HTML, Component or string }
</Collapse>`

	const [isOpen, setIsOpen] = useState(true)
	const [isOpenTwo, setIsOpenTwo] = useState(false)

	const [isOpenThree, setIsOpenThree] = useState(true)
	const [isOpenFour, setIsOpenFour] = useState(true)

	const setFirstElement = () => setIsOpen(!isOpen)
	const setSecondElement = () => setIsOpenTwo(!isOpenTwo)

	return (
		<PageWrapper>
			<Head>
				<title>{componentPagesMenu.components.subMenu.collapse.text}</title>
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
								title: componentPagesMenu.components.subMenu.collapse.text,
								to: `/${componentPagesMenu.components.subMenu.collapse.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-collapse--default' />
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
								<CardCodeView className='mb-4'>{GENERAL_USAGE}</CardCodeView>
								<CardCodeView>{GENERAL_USAGE_2}</CardCodeView>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='OpenInBrowser' iconColor='info'>
									<CardTitle>isOpen</CardTitle>
									<CardSubTitle>Collapse</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-collapse--default&args=isOpen:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isOpen: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											onClick={() => setFirstElement()}>
											Toggle first element
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											onClick={() => setSecondElement()}>
											Toggle second element
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											onClick={() => {
												setFirstElement()
												setSecondElement()
											}}>
											Toggle both element
										</Button>
									</div>
								</div>
								<div className='row mt-3 g-3'>
									<div className='col-lg-6'>
										<Collapse isOpen={isOpen} isChildClone>
											<Card className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>First Element</CardTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Some placeholder content for the first collapse
													component of this multi-collapse example. This
													panel is hidden by default but revealed when the
													user activates the relevant trigger.
												</CardBody>
											</Card>
										</Collapse>
									</div>
									<div className='col-lg-6'>
										<Collapse isOpen={isOpenTwo} isChildClone>
											<Card className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>Second Element</CardTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Some placeholder content for the second collapse
													component of this multi-collapse example. This
													panel is hidden by default but revealed when the
													user activates the relevant trigger.
												</CardBody>
											</Card>
										</Collapse>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='CopyAll' iconColor='success'>
									<CardTitle>isChildClone</CardTitle>
									<CardSubTitle>Collapse</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-collapse--default&args=isOpen:true;isChildClone:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isChildClone: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-lg-6'>
										<Button
											className='mb-3'
											color='info'
											isLight
											onClick={() => setIsOpenThree(!isOpenThree)}>
											{`Toggle isChildClone={false}`}
										</Button>
										<Collapse isOpen={isOpenThree}>
											<Card className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>isChildClone is false</CardTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													When isChildClone is false, it will wrap with a
													new div that you want to toggle.
												</CardBody>
											</Card>
										</Collapse>
									</div>
									<div className='col-lg-6'>
										<Button
											className='mb-3'
											color='info'
											isLight
											onClick={() => setIsOpenFour(!isOpenFour)}>
											{`Toggle isChildClone={true}`}
										</Button>
										<Collapse isOpen={isOpenFour} isChildClone>
											<Card className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>isChildClone is true</CardTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													When isChildClone is false, it will <b>not</b>{' '}
													wrap with a new div that you want to toggle.
												</CardBody>
											</Card>
										</Collapse>
									</div>
								</div>
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
