import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NewsCard({ id, title, date, excerpt, imageUrl }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="h-48 bg-gray-200 relative">
        {/* Image Placeholder or Actual Image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <time className="text-sm text-gray-500" dateTime={date}>{date}</time>
        <p className="text-gray-700 text-sm">{excerpt}</p>
        <Link 
          to={`/news/${id}`}
          className="inline-flex items-center text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors duration-200"
        >
          Rearrd More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
