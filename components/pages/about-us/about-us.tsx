import styles from './about-us.module.scss'
import Header from '@/components/ui/header/header';
import Paragraph from '@/components/ui/paragraph/paragraph';
import DoctorProfileCard from '@/components/ui/doctor-profile-card/doctor-profile-card';

const AboutUs: React.FC = () => {

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
                    <DoctorProfileCard
                        imageUrl={'https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}
                        name={'Hon Gan Son'}
                        role={'Okulista'}
                        bio={'Według historyków indyjskich pierwsze operacje okulistyczne wykonywano już 4,5 tys. lat p.n.e. Jest to teza sporna, z uwagi na brak źródeł. Pierwszą pisemną wzmiankę o operacji okulistycznej zawiera Kodeks Hammurabiego (spisany ok. 1772 p.n.e.), w którym paragraf 215 opisuje operację usunięcia ropnia worka łzowego[4].'}
                    />

                    <DoctorProfileCard
                        imageUrl={'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80'}
                        name={'Abigail Stone'}
                        role={'Dermatolog'}
                        bio={'Dermatolog zajmuje się leczeniem, diagnozowaniem i profilaktyką chorób skóry, włosów i paznokci. Na wizytę do poradni dermatologicznej powinny zgłosić się osoby, które zaobserwowały u siebie zmiany skórne, przebarwienia lub znamiona.'}
                    />

                    <DoctorProfileCard
                        imageUrl={'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}
                        name={'Amir Devi'}
                        role={'Endokrynolog'}
                        bio={'Endokrynologia nauka o wydzielaniu wewnętrznym, gruczołach i ich działaniu. Jako dziedzina medycyny, zajmuje się zaburzeniami funkcji gruczołów wydzielania  (zaburzenia wydzielania hormonów), np. tarczycy, nadnerczy, jajników.'}
                    />

                    <DoctorProfileCard
                        imageUrl={'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80'}
                        name={'Pan Miauczek'}
                        role={'Odstresowywacz'}
                        bio={'Lubi bawić się z pacjenami przed zabiegami. Kochany przez wszyskich.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;