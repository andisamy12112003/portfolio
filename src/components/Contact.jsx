const Contact = () => {
    return(
        <div className="w-full h-auto bg-skin pb-2 max-sm:bg-violet-200 "> 
            <h1 className="heading outfit-sans max-sm:text-4xl ">Contact</h1>
            <div className="max-md:p-4 flex justify-evenly max-md:flex-col md:flex-col md:p-10 flex-row max-md:-mt-15 max-lg:-mt-15 lg:-mt-16"> 
            <div className="w-[40vw] max-sm:w-full  border-l-8 pl-8 mt-12 box-border">
                <h1 className="font-mono text-4xl mb-2 mt-4 max-sm:text-lg">Name:</h1>
                <p className="font-mono text-4xl mb-2 text-gray-700 max-sm:text-lg">Andisamy A</p>
                <h1 className="font-mono text-4xl mb-2 max-sm:text-lg">Phone Number:</h1>
                <p className="font-mono text-4xl mb-2 text-gray-700 max-sm:text-lg">6369697633</p>
                <h1 className="font-mono text-4xl mb-2 max-sm:text-2xl">Gmail:</h1>
                <p className="font-mono text-4xl mb-2 text-gray-700 max-sm:text-[16px]  ">andisamyfullstack@gmail.com</p>

            </div>
            <div className="askme w-[40vw] max-sm:w-full  flex flex-col items-start max-md:p-6">
                <div >
                    <h1 className="font-mono text-4xl mb-3 mt-6 max-sm:text-3xl">Ask ME</h1>
                </div>
                    <input  type="gmail" placeholder="Enter Gmail" className=" border-2 rounded-lg border-lg p-3 m-4 max-md:w-60 md:w-100 lg:w-120 sm:w-100" />
                    <h1 className="font-mono text-4xl mb-3 mt-6">Question</h1>
                    <textarea placeholder="Ask..." cols={60}rows={10}  className="border-2 max-sm:hidden max-md:hidden rounded-lg border-lg p-3 m-4">
                    </textarea>
                    <textarea placeholder="Ask..." cols={50} rows={10}  className="md:hidden border-2 rounded-lg border-lg p-3 m-4 max-sm:hidden">
                    </textarea>
                    <textarea placeholder="Ask..." cols={30} rows={5}  className="md:hidden border-2 rounded-lg border-lg p-3 m-4">
                    </textarea>
                <button className="m-3 p-3 rounded-xl bg-blue-600 text-lg text-white">
                    Submit
                </button>
            </div>
            </div>
        </div>
    )
}

export default Contact
