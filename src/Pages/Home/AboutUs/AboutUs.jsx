
const AboutUs = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-center m-4">About Us</h3>
       <div className="flex lg:gap-10">
       <div >
            <img className="w-[1096px]" src="https://i.ibb.co/n3qHPJ8/motivation.jpg" alt="" />
        </div>
        <div className="ml-2">
        <p className="font-sembold">
        <span className="font-semibold">Mission</span>: At 3 Idiots Academy, our mission is to foster a supportive and innovative learning environment where students can achieve their full potential. We are committed to providing high-quality education that prepares our students for successful careers and lifelong learning.
        <br />
        <span className="font-semibold">Vission</span>: Our vision is to be a leading educational institution recognized globally for excellence in teaching, learning, and research. We aim to inspire and empower our students to make meaningful contributions to society.
        </p>
        </div>
       </div>
        </div>
    );
};

export default AboutUs;