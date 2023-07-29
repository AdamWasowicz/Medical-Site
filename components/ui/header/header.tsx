import styles from './header.module.scss';


interface IHeaderProps {
    children: string
}

const Header: React.FC<IHeaderProps> = (props) => {

    return (
        <h1 className={styles.header}>{ props.children }</h1>
    )
}

export default Header;