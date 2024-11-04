import React, { useEffect, useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar/SideBar';
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


const JobPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);


    const job = useLoaderData();



    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         const baseURL = `/api/jobs/${id}`
    //         try {
    //             const res = await fetch(baseURL);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log('Error fetching data', error);
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchJobs();
    // }, []);

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Job Listings
                    </Link>
                </div>
            </section>
            <section className="bg-indigo-50">
                (
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <i
                                        className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                    ></i>
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">
                                    {job.description}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{job.salary}</p>
                            </div>
                        </main>
                        <SideBar company={job.company} id={job.id} />
                    </div>
                </div>
                )
            </section>

        </>
    )
}

// loader method from React router Dom
const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}


export { JobPage as default, jobLoader }