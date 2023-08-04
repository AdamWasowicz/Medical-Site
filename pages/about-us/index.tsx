import AboutUs from '@/components/pages/about-us/about-us';
import getDoctorsFilesContent, { IDoctorFile } from '../../lib/read-doctors-from-json';
import { GetStaticPropsResult } from 'next';
import { IAboutUsProps } from '@/components/pages/about-us/about-us';

const AboutUsPage: React.FC<IAboutUsProps> = (props) => {
    
    return (
        <AboutUs doctorsData={props.doctorsData}/>
    )
}

export function getStaticProps(): GetStaticPropsResult<IAboutUsProps> {
    const doctorsData: IDoctorFile[] = getDoctorsFilesContent();

    const result: GetStaticPropsResult<IAboutUsProps> = {
        props: {
            doctorsData: doctorsData,
        },
        revalidate: 360,
    }

    return result;
}

export default AboutUsPage;