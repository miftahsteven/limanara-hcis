import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Head from 'next/head'
import classNames from 'classnames'
import useDarkMode from '../../hooks/useDarkMode'
import { componentPagesMenu } from '../../menu'
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../layout/SubHeader/SubHeader'
import Card, { CardBody } from '../../components/bootstrap/Card'
import CommonStoryBtn from '../../common/partial/other/CommonStoryBtn'
import Page from '../../layout/Page/Page'
import { TMenu } from '../../type/menu-type'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import Input from '../../components/bootstrap/forms/Input'
import Icon from '../../components/icon/Icon'

const Index: NextPage = () => {
	const { darkModeStatus } = useDarkMode()

	const icons: TMenu = componentPagesMenu.icons.subMenu

	const router = useRouter()

	const formik = useFormik({
		initialValues: {
			searchInput: '',
		},
		onSubmit: () => {},
	})

	return (
		<PageWrapper>
			<Head>
				<title>{`${componentPagesMenu.charts.text} List`}</title>
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Search...'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{Object.keys(icons)
						.filter((key) =>
							icons[key].text
								.toLowerCase()
								.includes(formik.values.searchInput.toLowerCase()),
						)
						.map((i) => (
							<div key={icons[i].id} className='col-md-3'>
								<Card
									className={classNames('cursor-pointer transition-base', {
										'bg-lo25-info-hover': darkModeStatus,
										'bg-l25-info-hover': !darkModeStatus,
									})}
									onClick={() => router.push(`../${icons[i].path}`)}>
									<CardBody>
										<div className='d-flex align-items-center'>
											<div className='flex-shrink-0'>
												<div
													className='ratio ratio-1x1'
													style={{ width: 72 }}>
													<div
														className={classNames(
															'rounded-2 d-flex align-items-center justify-content-center',
															{
																'bg-lo25-info': darkModeStatus,
																'bg-l25-info': !darkModeStatus,
															},
														)}>
														<span className='text-info fs-1 fw-bold'>
															<Icon icon={icons[i].icon} />
														</span>
													</div>
												</div>
											</div>
											<div className='flex-grow-1 ms-3 d-flex justify-content-between align-items-center'>
												<div>
													<div className='fw-bold fs-5 mb-0'>
														{icons[i].text}
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
						))}
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
