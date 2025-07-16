import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandy Tampubolon – Portfolio</title>
      </Head>
      <main className="bg-white text-gray-800">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
