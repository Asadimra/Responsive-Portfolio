export default function Home() {
    return (
      <div>
      <main>
        <section className="flex flex-col lg:flex-row  justify-center bg-black font-medium h-full  ">
          <div className="w-full lg:w-6/12 p-3 md:p-10 lg:p-0 my-10 lg:my-48 font-serif text-3xl md:text-6xl  text-white">
            Hi,My name is <span className="text-purple-600">Asad</span>
            <br />
            and I am a Passionate <br />
            <span className="text-purple-700">Web Developer</span>
          </div>
          <img className="w-full md:ml-11 md:w-9/12 lg:w-4/12 lg:my-24" src="/developer.png" alt="" />
        </section>
      </main>
    </div>
    );
  }
  