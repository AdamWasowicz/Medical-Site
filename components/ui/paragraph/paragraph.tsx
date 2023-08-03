import styles from './paragraph.module.scss';

interface IParagraphProps {
    children: string | JSX.Element
    className?: string
}

const Paragraph: React.FC<IParagraphProps> = (props) => {

    return (
        <p className={`${styles.paragraph} ${props.className}`}>
            { props.children }
        </p>
    )
}

export default Paragraph;