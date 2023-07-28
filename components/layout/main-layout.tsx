import Navigation from '../ui/navigation/navigation';
import Footer from '../ui/footer/footer';
import styles from './main-layout.module.scss';


interface IMainLayoutProps {
    children: string | JSX.Element | JSX.Element[]
}

const MainLayout: React.FC<IMainLayoutProps> = (props) => {

    return (
        <div>
            <Navigation/>

            <main>
                { props.children }
            </main>

            <Footer/>
        </div>
    )
}

export default MainLayout