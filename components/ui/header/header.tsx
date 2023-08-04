import styles from './header.module.scss';


interface IHeaderProps {
    children: string | JSX.Element
    className?: string
}

const Header: React.FC<IHeaderProps> = (props) => {

    return (
        <div className={`${styles.header}`}>
            <h1 className={`${props.className}`}>
                { props.children }
            </h1>
        </div>
    )
}

export default Header;