
import "../../../Component/All.css"
const Banner = () => {
  return (
    <div className="carousel w-full  img-style mt-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img 
          src="https://img.freepik.com/free-photo/3d-illustration-group-three-businessmen-showing-thumbs-up-gesture_1057-44715.jpg?t=st=1717321949~exp=1717325549~hmac=b2921c744a89669babe2dca0b77190eef3c9d181f1177c55a9d9282c14cbf67f&w=740"
          className="w-full lg:banner rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold">
              3 Idiots: Empower your learning journey with interactive courses
              and expert guidance at 3 Idiots.
            </h2>
            <p className="text-xl md:text-2xl">
              WE ARE EXCITED TO SHARE KNOWLEDGE!
            </p>
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/happy-schoolgirl-with-book-head_23-2148224811.jpg?t=st=1717322124~exp=1717325724~hmac=a0d6e6651d199726a931a1d1234917e4e1cdaec1463ce4cc2218335986fe5b31&w=826"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xlfont-bold">
              3 Idiots: Empower your learning journey with interactive courses
              and expert guidance at 3 Idiots.
            </h2>
            <p>WE ARE EXCITED TO SHARE KNOWLEDGE!</p>
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/boy-cartoon-character-surrounded-by-technology_23-2150964573.jpg?t=st=1717322211~exp=1717325811~hmac=4734f3a63e4ba7e64e061e7c48be8331b33015a28a578909107152459676f326&w=900"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold">
              3 Idiots: Empower your learning journey with interactive courses
              and expert guidance at 3 Idiots.
            </h2>
            <p>WE ARE EXCITED TO SHARE KNOWLEDGE!</p>
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8172.jpg?t=st=1717322292~exp=1717325892~hmac=af910e51ca0ae922b92416699bc43da3a8c99182a3b9ae873b12907891bce311&w=740"
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold">
              3 Idiots: Empower your learning journey with interactive courses
              and expert guidance at 3 Idiots
            </h2>
            <p>WE ARE EXCITED TO SHARE KNOWLEDGE !</p>
            <div></div>
          </div>
        </div>
        <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
