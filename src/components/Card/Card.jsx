import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ title, text, browse, style, tag }) => {
    return (
        <>
            <div className={style}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 mb-4">
                    {text}
                </p>
                <Link
                    to={tag}
                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                    {browse}
                </Link>
            </div>

        </>
    )
}

export default Card