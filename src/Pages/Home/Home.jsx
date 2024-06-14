import Review from "../Review";
import TeacherRequest from "../TeacherRequest/TeacherRequest";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import BasicInformation from "./BasicInformation/BasicInformation";
import ContactUs from "./ContactUs/ContactUs";
import Partner from "./Partner/Partner";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <Partner></Partner>
            <PopularClass></PopularClass>
            <Review></Review>
            <BasicInformation></BasicInformation>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <TeacherRequest></TeacherRequest>
          
        </div>
    );
};

export default Home;