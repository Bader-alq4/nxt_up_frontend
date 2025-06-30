import React from 'react'
import { Info, Rss, Calendar } from 'lucide-react'

const icons = {
    info:    <Info className="w-5 h-5 text-blue-600" />,
    news:    <Rss  className="w-5 h-5 text-blue-600" />,
      calendar: <Calendar className="w-5 h-5 text-blue-600" />,
}

export default function SectionHeader({ icon = 'info', title }) {
  return (
    <div className="flex items-center space-x-2 mt-12">
      {icons[icon]}
      <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
    </div>
  )
}
