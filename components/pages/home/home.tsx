import styles from './home.module.scss'
import SectionWithImage from '@/components/ui/horizontal-section-with-image/section-with-image';

const Home: React.FC = () => {

    return (
        <div className={styles.home}>
            <SectionWithImage
                title='Czym jest GoodMed+?'
                paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque imperdiet est quis placerat. Sed faucibus tellus vel vulputate malesuada. Fusce vitae tellus diam. Ut lobortis tristique porttitor. Nullam efficitur turpis a arcu venenatis, et molestie justo eleifend. Nunc ut odio est. Cras facilisis elit a ornare gravida.

                Ut pulvinar finibus tincidunt. Sed elementum, leo sit amet porta mattis, purus metus fermentum dui, vulputate placerat nunc est sed orci. Pellentesque at ipsum ac nisi semper blandit. Donec condimentum dictum iaculis. Sed consectetur arcu non enim suscipit lacinia. Aenean facilisis odio scelerisque, laoreet enim ac, dignissim nisl. Sed ultricies erat ut magna eleifend, vel dignissim est venenatis. Fusce iaculis ex risus, ac tristique justo aliquam in.'
                imageAlt='smilling seal'
                imageSrc='/images/seal1.jpg'
            />

            <SectionWithImage
                title='Co nas wyróżnia?'
                paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar dolor non neque tincidunt, ut fermentum metus mattis. Fusce ullamcorper ex a risus ornare vehicula. Maecenas quis arcu elementum, ullamcorper lorem id, molestie nibh. Ut ultrices metus nec neque ullamcorper laoreet. Vivamus venenatis tortor id felis pretium, ut consequat est convallis. Nulla vel tincidunt orci, eu vehicula ligula. Vestibulum fringilla magna eu ex molestie, et auctor diam tempus.

                Fusce a bibendum orci, a congue felis. Proin condimentum sem et velit rutrum, et interdum lectus suscipit. Etiam elementum ornare arcu, nec sollicitudin tellus lacinia eu. Etiam suscipit ex non urna bibendum, finibus sagittis arcu aliquet. Suspendisse risus ipsum, ornare et consequat id, ullamcorper non lacus. Mauris a tellus tincidunt risus feugiat auctor. Quisque aliquet vehicula felis, eu pellentesque felis ultrices sed.'
                imageAlt='sleping seal'
                imageSrc='/images/seal2.jpg'
            />

            <SectionWithImage
                title='Poznaj nasze usługi'
                paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar dolor non neque tincidunt, ut fermentum metus mattis. Fusce ullamcorper ex a risus ornare vehicula. Maecenas quis arcu elementum, ullamcorper lorem id, molestie nibh. Ut ultrices metus nec neque ullamcorper laoreet. Vivamus venenatis tortor id felis pretium, ut consequat est convallis. Nulla vel tincidunt orci, eu vehicula ligula. Vestibulum fringilla magna eu ex molestie, et auctor diam tempus.

                Fusce a bibendum orci, a congue felis. Proin condimentum sem et velit rutrum, et interdum lectus suscipit. Etiam elementum ornare arcu, nec sollicitudin tellus lacinia eu. Etiam suscipit ex non urna bibendum, finibus sagittis arcu aliquet. Suspendisse risus ipsum, ornare et consequat id, ullamcorper non lacus. Mauris a tellus tincidunt risus feugiat auctor. Quisque aliquet vehicula felis, eu pellentesque felis ultrices sed.'
                imageAlt='happy seal'
                imageSrc='/images/seal3.jpg'
            />
        </div>
    )
}

export default Home;