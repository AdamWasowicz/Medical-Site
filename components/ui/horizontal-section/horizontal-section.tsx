import styles from './horizontal-section.module.scss'


interface IHorizontalSectionProps {
    children: string | JSX.Element | JSX.Element[];
    className?: string;
}

const HorizontalSection: React.FC<IHorizontalSectionProps> = (props) => {

    return (
        <section className={`${styles.section} ${props.className}`}>
            { props.children }
        </section>
    )
}

export default HorizontalSection;