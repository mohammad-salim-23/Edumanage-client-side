import Review from "../Review";
import TeacherRequest from "../TeacherRequest/TeacherRequest";
import Banner from "./Banner/Banner";
import Partner from "./Partner/Partner";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <Partner></Partner>
            <PopularClass></PopularClass>
            <TeacherRequest></TeacherRequest>
           <Review></Review>
        </div>
    );
};

export default Home;