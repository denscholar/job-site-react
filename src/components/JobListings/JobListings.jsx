import React, { useEffect, useState } from 'react'
import Job from '../Job/Job'
import Spinner from '../Spinner/Spinner';



const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchJobs = async () => {
      const baseURL = "/api/jobs"
      try {
        const res = await fetch(baseURL);
        const data = await res.json();
        const listData = isHome ? data.slice(0, 3) : data;
        setJobs(listData);

      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false)
      }
    }

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h5 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h5>
        {loading ? <div style={{ display: "flex", justifyContent: "center" }}><Spinner/></div> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => {
              return (
                <Job key={job.id} job={job} />
              )
            })}
          </div>
        )}
      </div>
    </section>)
}
export default JobListings