import { link } from "node:fs";

export default function Project() {
  return (
    <div className="m-28">
      <h1 className="text-center text-4xl">Static Resume / Dynamic Resume</h1>
      <div className="flex   ">
        <img className=" w-5/12 " src="/StaticResume.png" alt="" />

        <div className=" mx-24 my-auto text-3xl ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veniam, porro iure doloribus tenetur libero pariatur animi sequi
            exercitationem in quis beatae soluta velit facilis, et nisi dolores
            repellat aut?
          </p>

          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            Html
          </button>
          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            CSS
          </button>
          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            Typescript
          </button>
        </div>
      </div>

      <h1 className="my-16 text-center text-4xl">Car Selling Website</h1>
      <div className="flex  ">
        <img className="w-2/5 " src="/CarSellingWebsite.png" alt="" />

        <div className=" mx-24 my-auto text-3xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veniam, porro iure doloribus tenetur libero pariatur animi sequi
            exercitationem in quis beatae soluta velit facilis, et nisi dolores
            repellat aut?
          </p>
          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            Next.js
          </button>
          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            Tailwand Css
          </button>
        </div>
      </div>

      <h1 className="my-16 text-center text-4xl">
        Responsive Governer Website
      </h1>
      <div className="flex  ">
        <img className="w-2/5 " src="/ResponsiveGovernerWebsite.png" alt="" />

        <div className=" mx-24 my-auto text-3xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veniam, porro iure doloribus tenetur libero pariatur animi sequi
            exercitationem in quis beatae soluta velit facilis, et nisi dolores
            repellat aut?
          </p>
          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            Next.js
          </button>
          <button className="bg-red-400 px-10 py-2 my-20 rounded-xl m-2">
            Tailwand Css
          </button>
        </div>
      </div>
      <div className="mt-10 font-serif text-center">
        <h1 className="text-3xl ">OR MANY MORE</h1>
      </div>
      <div className="flex justify-around my-9">
        <div>
          <h1 className="text-4xl my-5">Visit my gitup repo </h1>
          <a
            className="text-lg bg-blue-500 hover:bg-blue-300 p-3 px-5 ml-20 rounded-lg"
            href="https://github.com/Asadimra"
            target="blank"
          >
            Github.com
          </a>
        </div>
        <div>
          <h1 className="text-4xl my-5">Visit my Versol </h1>
          <a
            className="text-lg bg-blue-500 hover:bg-blue-300 p-3 px-5 ml-14 rounded-lg"
            href="https://vercel.com/asad-imrans-projects-65070e13"
            target="blank"
          >
            Versol.com
          </a>
        </div>
      </div>
    </div>
  );
}
