import styles from './about-us.module.scss'
import Header from '@/components/ui/header/header';
import Paragraph from '@/components/ui/paragraph/paragraph';
import DoctorProfileCard from '@/components/ui/doctor-profile-card/doctor-profile-card';
import { IDoctorFile } from '@/lib/read-doctors-from-json';

export interface IAboutUsProps {
    doctorsData: IDoctorFile[]
}

const AboutUs: React.FC<IAboutUsProps> = (props) => {

    return (
        <div className={styles.aboutUs}>
            <div 
                className={`${styles.narrowContainer} marginBottom40px`}
            >
                <Header className={styles.header}>O nas</Header>

                <Paragraph className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque imperdiet est quis placerat. Sed faucibus tellus vel vulputate malesuada. Fusce vitae tellus diam. Ut lobortis tristique porttitor. Nullam efficitur turpis a arcu venenatis, et molestie justo eleifend. Nunc ut odio est. Cras facilisis elit a ornare gravida.
                    Ut pulvinar finibus tincidunt. Sed elementum, leo sit amet porta mattis, purus metus fermentum dui, vulputate placerat nunc est sed orci. Pellentesque at ipsum ac nisi semper blandit. Donec condimentum dictum iaculis. Sed consectetur arcu non enim suscipit lacinia. Aenean facilisis odio scelerisque, laoreet enim ac, dignissim nisl. Sed ultricies erat ut magna eleifend, vel dignissim est venenatis. Fusce iaculis ex risus, ac tristique justo aliquam in.
                </Paragraph>
            </div>

            <div>
                <Header className={styles.header}>Nasi lekarze</Header>
                
                <div className={styles.doctorContainer}>
                    {
                        props.doctorsData.map((data, key) => {
                            return <DoctorProfileCard
                                key={key}
                                name={data.name}
                                role={data.role}
                                bio={data.bio}
                                imageUrl={data.imageUrl}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs;