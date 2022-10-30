import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modern Form</title>
      </Head>
      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-bold">Let's get started</h1>
            <p className="text-lg text-gray-500">
              Join our learn form Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, blanditiis?
            </p>
            <div className="mt-6">
              {/* name input field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="name">Name</label>
                <input className="border-2 p-2 rounded-md w-full border-teal-400" type="text" name="name" placeholder="Enter Your Name" />
              </div>
              {/* email input field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="email">Email</label>
                <input className="border-2 p-2 rounded-md w-full border-teal-400" type="email" name="email" placeholder="Enter Your email" />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="country">Country</label>
                <select className="border-2 p-2 rounded-md w-full border-teal-400" name="country">
                  <option>Indonesia</option>
                  <option>Vietnam</option>
                  <option>Thailand</option>
                  <option>Singapore</option>
                </select>
              </div>
              {/* term input field */}
              <div className="pb-4">
                <label className="block font-bold text-sm pb-2" htmlFor="terms">Terms of Service</label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="terms" value="checked" className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500"/>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ratione.</p>
                </div>
              </div>
              <button type="submit" className="bg-teal-500 text-sm text-white py-3 mt-6 rounded-lg w-full">Start Make Form</button>
            </div>
          </div>
          <div className="relative flex-1">
            <Image src="https://source.unsplash.com/random" fill className="object-cover rounded-lg"/>
          </div>
        </form>
      </main>
    </div>
  )
}
