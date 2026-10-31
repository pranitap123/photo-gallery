import Gallery from './components/Gallery'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="animate-rise">
        <h1 className="font-display text-5xl tracking-tight sm:text-7xl">
          Photo <em className="text-heart">Gallery</em>
        </h1>
      </header>
      <Gallery />
    </main>
  )
}

export default App
