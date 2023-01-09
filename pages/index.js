import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import Project from '../components/Project/Project'
import Secction from '../components/Secction/Secction'
import dynamic from 'next/dynamic'

export default function Home() {
	const DynamicHeader = dynamic(() => import('../components/Header/Header'), {
		loading: () => <Header />,
	})

	const DynamicSecction = dynamic(
		() => import('../components/Secction/Secction'),
		{
			loading: () => <Secction />,
		}
	)

	const DynamicComponent = dynamic(
		() => import('../components/Project/Project'),
		{
			loading: () => <Project />,
		}
	)

	return (
		<>
			<Layout
				title={' Duanly || Portfolio'}
				description={
					' Hola bienvenido a mi portafolio web ,me llamo duanly vega alderete y soy Developer...'
				}
			>
				<DynamicHeader />
				<DynamicSecction />
				<DynamicComponent />
			</Layout>
		</>
	)
}
