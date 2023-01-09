import Head from 'next/head'
import NavBar from '../NavBar/NavBar'
import PropTypes from 'prop-types'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import nProgress from 'nprogress'
import classNames from 'classnames'

export default function Layout({
	children,
	title,
	footer = true,
	dark = false,
	description,
	h1Title,
}) {
	const router = useRouter()

	useEffect(() => {
		function handleRouteChange(url) {
			console.log(url)
			NProgress.start()
		}
		router.events.on('routeChangeStart', handleRouteChange)

		router.events.on('routeChangeComplete', () => NProgress.done())

		router.events.on('routeChangeError', () => nProgress.done())

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [router])

	return (
		<>
			<section className={classNames({ 'bg-dark': dark, 'bg-light': !dark })}>
				<Head>
					<title>{title ? title : 'default title'}</title>

					<link rel='icon' type='image/png' href='/favicon.ico' />
					<meta name='description' content={description} />
				</Head>
				<NavBar />
				<main className='container py-4'>
					{h1Title && (
						<h2 className={classNames('text-center', { 'text-light': dark })}>
							{h1Title}
						</h2>
					)}
					{children}
				</main>
				{footer && <Footer />}
			</section>
		</>
	)
}

Layout.defaultProps = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
	description: PropTypes.string.isRequired,
	footer: PropTypes.bool,
}
