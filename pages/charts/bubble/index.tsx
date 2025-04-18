import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import PageWrapper from '../../../layout/PageWrapper/PageWrapper'
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader'
import Page from '../../../layout/Page/Page'
import { componentPagesMenu } from '../../../menu'
import Breadcrumb from '../../../components/bootstrap/Breadcrumb'
import CommonStoryBtn from '../../../common/partial/other/CommonStoryBtn'
import BubbleBasic from '../_examples/chart-bubble/BubbleBasic'
import Bubble3D from '../_examples/chart-bubble/Bubble3D'

const Index: NextPage = () => {
	return (
		<PageWrapper>
			<Head>
				<title>{componentPagesMenu.charts.subMenu.chartsBubble.text}</title>
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Bubble', to: '/charts/bubble' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-bubble--bubble-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<BubbleBasic />
					<Bubble3D />
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
