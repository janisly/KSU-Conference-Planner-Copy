import { MuiButton } from '../../Button/Button';
import { MainInfo } from '../../MainInfo/MainInfo';
import NavbarGeneric from '../../NavbarGeneric/NavbarGeneric';
import NavbarGeneralAttendee from '../../NavbarGeneralAttendee/NavbarGeneralAttendee';
import { PhotoCarousel } from '../../PhotoCarousel/PhotoCarousel';
const ComponentTest = (): React.JSX.Element => { 
    return (
        <div>
            { <MuiButton/> }
            { <MainInfo 
            image='https://source.unsplash.com/random'
            title='Test Title'
            description='This is a test description. I am not great at writing these. Hope this works'/>
            }
            <NavbarGeneric></NavbarGeneric>
            <PhotoCarousel></PhotoCarousel>
            <NavbarGeneralAttendee></NavbarGeneralAttendee>
        </div>
    ); 
};

export default ComponentTest;