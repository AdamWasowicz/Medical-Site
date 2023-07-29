import HorizontalSection from '@/components/ui/horizontal-section/horizontal-section';
import styles from './home.module.scss'
import Header from '@/components/ui/header/header';
import Paragraph from '@/components/ui/paragraph/paragraph';
import Image from 'next/image';

const Home: React.FC = () => {

    return (
        <div className={styles.home}>
            <HorizontalSection className={styles.twoColumns}>
                <div>
                    <Header>Czym jest GoodMed+?</Header>

                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui lorem, imperdiet eget turpis ut, laoreet mollis mi. Etiam id dui tortor. Nullam ultricies posuere metus in aliquam. Vestibulum posuere diam in elit vulputate, eu convallis sem fringilla. Nam vulputate blandit erat, ac interdum arcu rutrum nec. Praesent consectetur facilisis libero sit amet suscipit. Ut non est vitae nibh accumsan efficitur. Morbi faucibus at mi ut efficitur.
                        Morbi efficitur aliquet arcu fringilla tempus. Cras tincidunt diam non lorem semper blandit. Sed eget odio bibendum, vestibulum quam vitae, cursus magna. Nulla in massa lectus. Phasellus vel hendrerit est, ac egestas turpis. Vestibulum posuere lacinia turpis, vitae mattis nisi laoreet mollis. Fusce lacinia lacus sed tempor finibus. Aliquam suscipit elit nec magna venenatis sodales. Vivamus turpis arcu, porttitor eget neque quis, tincidunt gravida est. Integer id erat convallis, dapibus elit in, lacinia tortor. Praesent vitae interdum justo, in commodo urna. Vivamus sem dolor, vulputate sit amet luctus eget, scelerisque sit amet risus. Duis et iaculis quam. Sed at enim nunc. Nunc accumsan mauris id elit tincidunt dignissim.
                    </Paragraph>
                </div>

                <Image 
                    src={'https://www.pbs.org/wnet/nature/files/2021/09/pexels-skitterphoto-23087-1-scaled-e1630516360213-2048x1152.jpg'} 
                    alt='seal'
                    height={400}
                    width={800}
                />
            </HorizontalSection>
        </div>
    )
}

export default Home;