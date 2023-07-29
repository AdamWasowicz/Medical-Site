import Navigation from '@/components/ui/navigation/navigation';
import Footer from '@/components/ui/footer/footer';
import styles from './main-layout.module.scss';


interface IMainLayoutProps {
    children: string | JSX.Element | JSX.Element[]
}

const MainLayout: React.FC<IMainLayoutProps> = (props) => {

    return (
        <div>
            <Navigation/>

            <main className={styles.main}>
                { props.children }
            </main>

            <Footer/>
        </div>
    )
}

export default MainLayout