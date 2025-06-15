import project1 from "../assets/project1.png"
import project from "../assets/project.png"
import project2 from "../assets/project2.png"


const Projects = () => {
    return(
        <div className="bg-skin max-sm:bg-red-300 h-auto max-md:h-auto md:gap-y-5 w-full items-center" >
            <h1 className="outfit-sans heading  max-sm:text-3xl max-lg:mb-4">Projects</h1>
            <div className="max-lg:items-center lg:flex-row lg:flex-wrap lg:items-center lg:justify-center
            lg:gap-x-12  max-lg:gap-y- md:flex-col pb-10 md:gap-y-6 max-md:p-4 flex max-md:flex-col
            max-md:justify-center max-md:items-center max-sm:w-full overflow-scroll max-sm:pb-9 max-sm:overflow-auto no-scrollbar max-md:gap-y-10 ">
                <div className="flex flex-wrap justify-center max-sm:-mt-12 lg:flex-wrap">

                <div className="max-sm:mt-10 m-7">
                        <img src={project1} className="xl:w-140 lg:w-190 lg:h-120 lg:hover:w-118 lg:hover:shadow-2xl
                        max-lg:w-120 max-lg:h-120 max-lg:hover:size-115 max-lg:shadow-2xl max-md:w-90 max-md:h-90 max-md:hover:size-87 max-md:shadow-2xl rounded-2xl max-sm:h-50" />
                        <div className="mt-9 ">
                        <h1 className="font-mono text-[16px] max-sm:-mt-6 max-lg:text-[22px] lg:text-[24px]"><span className="font-bold">Jobby</span> - Job Searching website</h1> 
                        <div  className="w-full text-sm max-lg:mt-2 mb-2 lg:text-[19px] lg:mt-2">   
                            <p className="max-lg:text-[19px]">username:rahul</p> <br />
                            <p className="max-sm:-mt-6 max-lg:text-[19px] max-lg:-mt-6 lg:-mt-6">password:rahul@2021</p>    
                        </div>
                        </div>
                </div>

                <div className="max-sm:mt-10 m-7">
                        <img src={project2} className="xl:w-140 lg:w-190  lg:h-120 lg:hover:w-118 lg:hover:shadow-2xl
                        max-lg:w-120 max-lg:h-120 max-lg:hover:size-115 max-lg:shadow-2xl max-md:w-90 max-md:h-90 max-md:hover:size-87 max-md:shadow-2xl rounded-2xl max-sm:h-50" />
                        <div className="mt-9 ">
                        <h1 className="font-mono text-[16px] max-sm:-mt-6 max-lg:text-[22px] lg:text-[24px]"><span className="font-bold">Next Trendz</span> - Video watching website</h1> 
                        <div  className="w-full text-sm max-lg:mt-2 mb-2 lg:text-[19px] lg:mt-2">   
                            <p className="max-lg:text-[19px]">username:rahul</p> <br />
                            <p className="max-sm:-mt-6 max-lg:text-[19px] max-lg:-mt-6 lg:-mt-6">password:rahul@2021</p>    
                        </div>
                        </div>
                </div>


                </div>
            </div>
        </div>
    )
}
 export default Projects 


