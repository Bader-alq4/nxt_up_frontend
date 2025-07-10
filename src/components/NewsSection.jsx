import React from 'react'
import SectionHeader from './SectionHeader'
import NewsCard from './NewsCard'
import { Newspaper } from 'lucide-react'

const dummyNews = [
  {
    id: 1,
    title: 'Season Opener Triumph!',
    date: 'October 26, 2023',
    excerpt: 'Our 18U Boys team started the season with a thrilling victory.',
    imageUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: 2,
    title: 'New Uniforms Unveiled',
    date: 'October 20, 2023',
    excerpt: 'Check out the fresh new look for all our teams this season.',
    imageUrl: 'https://placehold.co/600x400.png'
  },
  {
    id: 3,
    title: 'Community Day Success',
    date: 'October 15, 2023',
    excerpt: 'Thanks to everyone who came out for our community fun day!',
    imageUrl: 'https://placehold.co/600x400.png'
  },
]

export default function NewsSection() {
  return (
    <section className="mb-8">
      <SectionHeader icon={<Newspaper className="h-6 w-6 text-blue-600" />} title="Events" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {dummyNews.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
