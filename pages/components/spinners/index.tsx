import React, { Fragment } from 'react'
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
import Button from '../../../components/bootstrap/Button'
import Spinner from '../../../components/bootstrap/Spinner'
import CommonHowToUse from '../../../common/partial/other/CommonHowToUse'
import COLORS from '../../../common/data/colorDummyData'
import Popovers from '../../../components/bootstrap/Popovers'

const Index: NextPage = () => {
	const GENERAL_USAGE = `
<Spinner
	tag={ String } // 'div' || 'span'
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	isGrow={ Boolean }
	isSmall={ Boolean }
	size={ Number || String } // Example: 10, '3vh', '5rem' etc.
	inButton={ Boolean || String} // true || false || 'onlyIcon'
	className={ String }
	{...props} />`
	return (
		<PageWrapper>
			<Head>
				<title>{componentPagesMenu.components.subMenu.spinners.text}</title>
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
								title: componentPagesMenu.components.subMenu.spinners.text,
								to: `/${componentPagesMenu.components.subMenu.spinners.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-spinner--default' />
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
								<CardCodeView>{GENERAL_USAGE}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>Spinner</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-spinner--default&args=color:secondary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(COLORS).map((color) => (
										<div key={COLORS[color]} className='col-auto'>
											<Spinner color={COLORS[color]} />
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='RadioButtonChecked' iconColor='success'>
									<CardTitle>isGrow</CardTitle>
									<CardSubTitle>Spinner</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-spinner--default&args=isGrow:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isGrow: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(COLORS).map((color) => (
										<div key={COLORS[color]} className='col-auto'>
											<Spinner color={COLORS[color]} isGrow />
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='PhotoSizeSelectSmall' iconColor='danger'>
									<CardTitle>isSmall</CardTitle>
									<CardSubTitle>Spinner</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-spinner--default&args=isSmall:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isSmall: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(COLORS).map((color) => (
										<Fragment key={COLORS[color]}>
											<div className='col-auto'>
												<Spinner color={COLORS[color]} isSmall />
											</div>
											<div className='col-auto'>
												<Spinner color={COLORS[color]} isSmall isGrow />
											</div>
										</Fragment>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='warning'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Spinner</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-spinner--default&args=size:3rem' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3 align-items-center'>
									<div className='col-auto'>
										<Popovers trigger='hover' desc='Size 10'>
											<Spinner color='primary' size={10} />
										</Popovers>
									</div>
									<div className='col-auto'>
										<Popovers trigger='hover' desc='Size 10'>
											<Spinner color='primary' size={10} isGrow />
										</Popovers>
									</div>
									<div className='col-auto'>
										<Popovers trigger='hover' desc='Size 3rem'>
											<Spinner color='secondary' size='3rem' />
										</Popovers>
									</div>
									<div className='col-auto'>
										<Popovers trigger='hover' desc='Size 3rem'>
											<Spinner color='secondary' size='3rem' isGrow />
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='SmartButton' iconColor='primary'>
									<CardTitle>inButton</CardTitle>
									<CardSubTitle>Spinner</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-spinner--default&args=isSmall:true;inButton:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									inButton: PropTypes.oneOfType([PropTypes.bool,
									PropTypes.oneOf(['onlyIcon'])]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3 align-items-center'>
									<div className='col-auto'>
										<Button color='primary' isLight>
											<Spinner isSmall inButton='onlyIcon' />
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isLight>
											<Spinner isSmall inButton='onlyIcon' isGrow />
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight>
											<Spinner isSmall inButton />
											Loading...
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isLight>
											<Spinner isSmall inButton isGrow />
											Loading...
										</Button>
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
