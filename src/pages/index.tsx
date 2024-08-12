import PokemonCard from '@/components/PokemonCard'
import { useInfiniteQuery } from '@/hooks'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-cool-inview'

export interface Result {
  name: string
  url: string
}
export interface PokemonIDList {
  count: number
  next: string
  previous?: any
  results: Result[]
}

const Home: NextPage = () => {
  const { data, next } = useInfiniteQuery()
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const pokemons: any = useMemo(
    () =>
      data?.flatMap((page: any) => page?.results).filter((pokemon: Result) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) ?? [],
    [data, searchQuery]
  )

  const { observe } = useInView({
    rootMargin: '300px',
    onEnter: ({ unobserve }) => {
      unobserve()
      next()
    },
  })

  return (
    <>
      <Head>
        <title>Pokedéx</title>
        <meta name="description" content="Get information about all Pokemons" />
        <meta property="og:title" content="Pokedéx" key="Pokedéx" />
      </Head>

      <div className="w-full max-w-7xl p-4 lg:p-8 xl:w-2/3">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`-mt-16 rounded-xl fixed left-1/2 transform -translate-x-1/2 w-[450px] border border-gray-300 p-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 ${scrolled
            ? "border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0 backdrop-blur-xl"
            } z-30 transition-all`}
        />
      </div>

      <ul className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-4 pt-24 p-10 md:grid-cols-2 md:gap-5 lg:gap-7 lg:p-16 lg:pt-4 xl:w-2/3 2xl:grid-cols-3">
        {pokemons?.map((data: any, index: number) => {
          const isLast = index === pokemons.length - 1
          const { name, url } = data

          return (
            <li
              key={name}
              ref={isLast ? observe : null}
              className="h-80 w-full"
            >
              <PokemonCard url={url} index={++index} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home