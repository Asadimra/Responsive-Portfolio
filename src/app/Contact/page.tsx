
import Image from "next/image";
export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-6/12">
        <h1 className=" font-semibold text-3xl mx-20 my-10 lg:text-5xl lg:mt-16 lg:text-center ">Contact us</h1>
        <form className="mt-1 flex gap-10 justify-center items-center flex-col  ">
          <input
            type="name"
            className="p-4 rounded-2xl w-4/5 border-2 border-red-300"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            className="p-4 rounded-2xl w-4/5 border-2 border-red-300"
            placeholder="Enter your Email"
          />
          <textarea
            name="message"
            className="p-2 rounded-2xl w-4/5 border-2 border-red-300"
            placeholder="Enter your message"
          ></textarea>
          <button className="w-full  lg:w-2/5 rounded-2xl px-8 py-3 text-xl font-medium bg-blue-800 hover:bg-blue-500 text-white ">
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full lg:w-6/12 mt-16">
        <Image
          src="/ContactImage1.webp"
          alt=""
          width={800}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
