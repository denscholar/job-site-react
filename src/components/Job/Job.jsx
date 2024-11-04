import React, { useState } from 'react'
import { FaMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Job = (props) => {
    const [showDescription, setShowDescription] = useState(false)
    const { id, title, description, location, salary, type } = props.job
    let descriptionLength = description;


    if (!showDescription) {
        descriptionLength = descriptionLength.substring(0, 90) + '...'
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{type}</div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>

                <div className="mb-5">
                    {descriptionLength}
                </div>
                <button onClick={() => setShowDescription((prevState) => !prevState)} style={{ backgroundColor: "blue", width: "auto", padding: "2px 20px", borderRadius: "10px", color: "White", marginBottom: "10px" }}>{showDescription ? 'See Less' : "See More"}</button>


                <h3 className="text-indigo-500 mb-2">{salary}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMarker />
                        {location}
                    </div>
                    <Link
                        to={`/jobs/${id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Job