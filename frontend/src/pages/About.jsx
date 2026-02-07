import React from 'react'
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px] h-full object-cover overflow-hidden border border-pink-300 shadow-lg rounded-lg "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-medium text-gray-600">
          <p>
            Zenvyra is more than just a fashion brand—it's a celebration of
            individuality and style. Founded with a passion for creating
            timeless pieces that blend contemporary design with classic
            elegance, we've been helping fashion enthusiasts express their
            unique personalities since our inception.
          </p>
          <p>
            Our carefully curated collections feature premium materials,
            exceptional craftsmanship, and attention to detail that sets us
            apart. From everyday essentials to statement pieces, every item in
            our collection is designed to make you feel confident and stylish.
          </p>
          <b className="text-gray-800 text-2xl font-semibold">Our Mission</b>
          <p>
            To empower individuals through fashion by providing high-quality,
            sustainable, and stylish clothing that doesn't compromise on comfort
            or ethics. We believe that great style should be accessible to
            everyone, and we're committed to making fashion that's both
            beautiful and responsible.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground">Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-white px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl text-gray-800">Quality Assurance:</b>
          <p className=" text-gray-600 text-base">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-white px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl text-gray-800">Convenience:</b>
          <p className=" text-gray-600 text-base">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-white px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl text-gray-800">Exceptional Customer Service:</b>
          <p className=" text-gray-600 text-base">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About