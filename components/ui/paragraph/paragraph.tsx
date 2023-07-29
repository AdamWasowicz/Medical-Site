import styles from './paragraph.module.scss';

interface IParagraphProps {
    children: string | JSX.Element
}

const Paragraph: React.FC<IParagraphProps> = (props) => {

    return (
        <p className={styles.paragraph}>{ props.children }</p>
    )
}

export default Paragraph;