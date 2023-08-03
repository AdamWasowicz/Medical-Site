import Image from 'next/image';
import styles from './doctor-profile-card.module.scss';

interface IDoctorProfileCardProps {
    imageUrl: string,
    name: string
    role: string
    bio: string
}

const DoctorProfileCard: React.FC<IDoctorProfileCardProps> = (props) => {

    return (
        <article className={styles.doctorProfileCard}>
            <div>
                <Image
                    className={styles.image}
                    src={props.imageUrl}
                    alt={props.name}
                    width={400}
                    height={400}
                />

                <h3 className={styles.doctorName}>{ props.name }</h3>

                <h4 className={styles.doctorRole}>{ props.role }</h4>
            </div>

            <p className={styles.doctorBio}>{ props.bio }</p>
        </article>
    )
}

export default DoctorProfileCard;