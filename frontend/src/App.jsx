import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { AlertCircle, CheckCircle, InfoIcon } from 'lucide-react'
import Header from './components/Header'
import Search from './components/Search'
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import Modal from './components/Modal'

import { getRandomQuote } from './components/Quotes'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchResult, setSearchResult] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date().toISOString())
  const [leftQuote, setLeftQuote] = useState(getRandomQuote())
  const [rightQuote, setRightQuote] = useState(getRandomQuote())

  const observer = useRef()
  const pollInterval = useRef()

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const lastPostElementRef = useCallback(node => {
    if (isLoading || isSearchActive) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoading, hasMore, isSearchActive])

  const fetchPosts = async (pageNum, replace = false) => {
    try {
      // setIsLoading(true)
      // Introduce a delay of 2 seconds
      // await new Promise(resolve => setTimeout(resolve, 2000))
      const response = await fetch(`https://public-links-dot-in.onrender.com/api/links?page=${pageNum}&limit=10`)
      const data = await response.json()
      
      setPosts(prev => {
        if (replace) return data.links
        const newPosts = data.links.filter(newPost => 
          !prev.some(existingPost => existingPost._id === newPost._id)
        )
        return [...prev, ...newPosts]
      })
      setHasMore(data.hasMore)
      setLastUpdate(new Date().toISOString())
    } catch (err) {
      setError('Failed to fetch posts')
      toast.error('Failed to fetch posts')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    pollInterval.current = setInterval(async () => {
      try {
        const response = await fetch(`https://public-links-dot-in.onrender.com/api/links/new?lastUpdate=${lastUpdate}`)
        const newPosts = await response.json()
        
        if (newPosts.length > 0) {
          setPosts(prev => {
            const uniqueNewPosts = newPosts.filter(newPost => 
              !prev.some(existingPost => existingPost._id === newPost._id)
            )
            return [...uniqueNewPosts, ...prev]
          })
          setLastUpdate(new Date().toISOString())
          toast.info(`${newPosts.length} new post👀`)
        }
      } catch (err) {
        console.error('Failed to poll for new posts:', err)
      }
    }, 10000)

    return () => clearInterval(pollInterval.current)
  }, [lastUpdate, isSearchActive])

  const handleSearch = async (id) => {
    try {
      setIsSearchActive(true)
      const response = await fetch(`https://public-links-dot-in.onrender.com/api/links/search/${id}`)
      const data = await response.json()
      
      if (data) {
        setSearchResult(data)
      } else {
        setSearchResult(null)
      }
      
      setIsModalOpen(true)
    } catch (err) {
      toast.info('Enter🔗Link Id')//toast.info
    }
  }

  const handleClearSearch = () => {
    setIsSearchActive(false)
    setSearchResult(null)
    setIsModalOpen(false)
  }

  const handleNewPost = async (postData) => {
    try {
      const response = await fetch('https://public-links-dot-in.onrender.com/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      if (!response.ok) throw new Error('Network Error!')

      const newPost = await response.json()
      
      setPosts(prev => {
        if (prev.some(post => post._id === newPost._id)) return prev
        return [newPost, ...prev]
      })
    
      toast.success('Posted 👍')
    } catch (err) {
      toast.error('Network Error 😭')
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    if (!isSearchActive) {
      fetchPosts(1, true)
    }
  }, [])

  useEffect(() => {
    if (page > 1 && !isSearchActive) {
      fetchPosts(page)
    }
  }, [page])

  return (
    <div className="min-h-screen bg-purple-100 dark:bg-gray-900 flex overflow-hidden">
       
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <Loader isLoading={isLoading} onLoadingComplete={() => setIsLoading(false)} />
        </div>
      )}
  
      <Sidebar quote={leftQuote} />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-shrink-0 bg-purple-100 dark:bg-gray-900">
        <ToastContainer
        limit={1}
        position="top-right"
        autoClose={500}
        hideProgressBar
        closeButton={false}
        theme="dark"
        className="  max-h-16"
        toastClassName=" ml-[6rem] max-sm:ml-[16rem]" 
        progressClassName="progress-bar"
      />
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Search
            onSearch={handleSearch}
            onClearSearch={handleClearSearch}
            isSearchActive={isSearchActive}
          />
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide px-4">
          {error && (
            <div className="text-red-500 text-center py-4">{error}</div>
          )}
          {posts.length > 0 ? (
            <>
              {posts.map((post, index) => (
                <div
                  key={post._id}
                  ref={index === posts.length - 1 ? lastPostElementRef : null}
                >
                  <Post
                    id={post.linkId}
                    message={post.url}
                    timestamp={new Date(post.createdAt).toLocaleString()}
                    vpnEnabled={post.requiresVpn}
                  />
                </div>
              ))}
              
              {!isLoading && (
                <div className="h-20 w-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                </div>
              )}
              
              {!hasMore && !isSearchActive && (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    You've reached the bottom of the page
                  </p>
                </div>
              )}
            </>
          ) : (
            !isLoading && (isSearchActive ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center">No link found</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Loader className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center">Loading...</p>
              </div>
            ))
          )}
        </div>

        <div className="flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg ">
          <Post id="New" isNew={true} onSubmit={handleNewPost} />
        </div>
      </main>

      <Sidebar quote={rightQuote} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setIsSearchActive(false)
          setSearchResult(null)
        }}
        result={searchResult}
        errorMessage="Link not found"
      />
    </div>
  )
}



