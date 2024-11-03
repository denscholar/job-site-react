import React from 'react'
// import Navbar from './components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card'
import JobListings from '../components/JobListings/JobListings';
import ViewAllJobs from '../components/ViewAllJobs/ViewAllJobs';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <Card style="bg-gray-100 p-6 rounded-lg shadow-md" title="For Developer" text="List your job to find the perfect developer for the role" browse="Browse Jobs" tag="/jobs" />
                        <Card style="bg-indigo-100 p-6 rounded-lg shadow-md" title="For Employers" text="List your job to find the perfect developer for the role" browse="Add Jobs" tag="/add-job" />
                    </div>
                </div>
            </section>
            <JobListings isHome={true} />
            <ViewAllJobs />
        </div>
    )
}

export default HomePage
