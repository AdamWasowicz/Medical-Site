import Header from "../header/header";
import Paragraph from "../paragraph/paragraph";
import Image from "next/image";
import styles from './section-with-image.module.scss';

interface ISectionWithImageProps {
    title: string | JSX.Element;
    paragraph: string | JSX.Element;
    imageSrc: string;
    imageAlt: string;
}

const SectionWithImage: React.FC<ISectionWithImageProps> = (props) => {

    return (
        <section className={styles.section}>
            <Header className={styles.centerOnSmallScreens}>{ props.title }</Header>

            <div className={styles.twoColums}>
                <div className={styles.textColumn}>
                    <Paragraph>
                            { props.paragraph }
                    </Paragraph>
                </div>

                <div className={styles.imageColumn}>
                    <Image 
                        src={ props.imageSrc } 
                        alt={ props.imageAlt }
                        className={styles.image}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionWithImage;