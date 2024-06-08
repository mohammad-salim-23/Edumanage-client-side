const Partner = () => {
  return (
    <>
      <h2 className="text-4xl text-center space-y-3 mb-3">
        OUR <span className="text-orange-500">PARTNER</span>
      </h2>
      <marquee speed={100}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img
              className=" w-52"
              src="https://img.freepik.com/free-vector/logo-template-design_1289-90.jpg?t=st=1717322949~exp=1717326549~hmac=cc95d4cb599dffe13880837a87cc8fa5839c636c377bb5b84d4557c586e28fee&w=740"
              alt=""
            />
            <p>
              Together with our <br /> esteemed partners
            </p>
          </div>
          <div>
            <img
              className=" w-52"
              src="https://img.freepik.com/free-vector/gradient-school-logo-design-template_23-2149664332.jpg?t=st=1717323484~exp=1717327084~hmac=d1a5fb4ed39d96cd266d36a075e0f62978465e76048b06096bdf40fa7c8a2d5f&w=740"
              alt=""
            />
            <p>
              Together with our <br /> esteemed partners
            </p>
          </div>
          <div>
            <img
              className=" w-52"
              src="https://img.freepik.com/free-vector/school-logo-template_23-2149713033.jpg?t=st=1717323520~exp=1717327120~hmac=bebfa5a2d0f1385302d87aad1e206c20c77b3f22f0a0ff0dbf7972fa7a13e5f8&w=740"
              alt=""
            />
            <p>
              Together with our <br /> esteemed partners
            </p>
          </div>
          <div>
            <img
              className=" w-52"
              src="https://img.freepik.com/premium-photo/letter-b-monogram-logo-design-illustration-graphic-creative_955379-11482.jpg?w=740"
              alt=""
            />
            <p>
              Together with our <br /> esteemed partners
            </p>
          </div>
        </div>
      </marquee>
    </>
  );
};

export default Partner;
