import TeacherRequest from "../TeacherRequest/TeacherRequest";
import Banner from "./Banner/Banner";
import Partner from "./Partner/Partner";


const Home = () => {
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <Partner></Partner>
            <TeacherRequest></TeacherRequest>
        </div>
    );
};

export default Home;