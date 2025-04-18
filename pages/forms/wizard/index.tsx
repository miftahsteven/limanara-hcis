import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import PageWrapper from '../../../layout/PageWrapper/PageWrapper'
import { componentPagesMenu } from '../../../menu'
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader'
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
import Breadcrumb from '../../../components/bootstrap/Breadcrumb'
import { TColor } from '../../../type/color-type'
import Wizard, { WizardItem } from '../../../components/Wizard'
import CommonStoryBtn from '../../../common/partial/other/CommonStoryBtn'
import CommonHowToUse from '../../../common/partial/other/CommonHowToUse'

const Index: NextPage = () => {
	const GENERAL_USAGE = `
<Wizard
	isHeader={ Boolean || String } // true || false || 'withButton'
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	stretch={ Boolean || String } // false || true || 'semi'
	onSubmit={ Function }
	{...props}>
	<WizardItem
		id={ String }
		title={ String }
		className={ String }
		{...props}>
	{ /* CHILDREN */}
	</WizardItem>
	...
</Wizard>`

	const COLORS: TColor[] = [
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'dark',
	]

	return (
		<PageWrapper>
			<Head>
				<title>{componentPagesMenu.forms.subMenu.wizard.text}</title>
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Wizard', to: '/forms/wizard' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='AutoFixHigh'>
									<CardTitle tag='h2'>Wizard</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Wizard and WizardItem</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{GENERAL_USAGE}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='FormatSize'>
									<CardTitle>isHeader</CardTitle>
									<CardSubTitle>Wizard</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									isHeader: PropTypes.oneOfType([PropTypes.bool,
									PropTypes.oneOf(['withButton'])]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-4'>
										<Wizard
											className='mb-0'
											stretch
											onSubmit={(e: Event) => {
												e.preventDefault()
											}}>
											<WizardItem id='item1'>Header is false.</WizardItem>
											<WizardItem id='item2'>Item 2</WizardItem>
											<WizardItem id='item3'>Item 3</WizardItem>
										</Wizard>
									</div>
									<div className='col-md-4'>
										<Wizard
											className='mb-0'
											isHeader
											onSubmit={(e: Event) => {
												e.preventDefault()
											}}>
											<WizardItem id='item2-1'>Header is false.</WizardItem>
											<WizardItem id='item2-2'>Item 2</WizardItem>
											<WizardItem id='item2-3'>Item 3</WizardItem>
										</Wizard>
									</div>
									<div className='col-md-4'>
										<Wizard
											className='mb-0'
											isHeader='withButton'
											onSubmit={(e: Event) => {
												e.preventDefault()
											}}>
											<WizardItem id='item3-1'>Header is false.</WizardItem>
											<WizardItem id='item3-2'>Item 2</WizardItem>
											<WizardItem id='item3-3'>Item 3</WizardItem>
										</Wizard>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Brush'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>Wizard</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', 'link', 'brand',
									'brand-two', 'storybook' ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{COLORS.map((color) => (
										<div key={color} className='col-md-4'>
											<Wizard
												color={color}
												className='mb-0'
												isHeader='withButton'
												onSubmit={(e: Event) => {
													e.preventDefault()
												}}>
												<WizardItem id={`item-${color}-1`}>
													Color is {color}.
												</WizardItem>
												<WizardItem id={`item-${color}-2`}>
													Item 2
												</WizardItem>
												<WizardItem id={`item-${color}-3`}>
													Item 3
												</WizardItem>
											</Wizard>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='TextFields' iconColor='danger'>
									<CardTitle>title</CardTitle>
									<CardSubTitle>WizardItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>title: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Wizard
									className='mb-0'
									isHeader
									onSubmit={(e: Event) => {
										e.preventDefault()
									}}>
									<WizardItem id='item2-1' title='Sample Section'>
										Title is "Sample Section".
									</WizardItem>
									<WizardItem id='item2-2'>
										Title is <code>null</code>.
									</WizardItem>
									<WizardItem id='item2-3' title='Preview'>
										Title is "Preview".
									</WizardItem>
								</Wizard>
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
