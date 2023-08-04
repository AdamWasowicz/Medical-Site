import styles from './paragraph.module.scss';

interface IParagraphProps {
    children: string | JSX.Element
    className?: string
}

const Paragraph: React.FC<IParagraphProps> = (props) => {

    return (
        <div className={`${styles.paragraph}`}>
            <p className={`${props.className}`}>
                { props.children }
            </p>
        </div>
    )
}

export default Paragraph;