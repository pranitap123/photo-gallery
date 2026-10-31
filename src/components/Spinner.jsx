function Spinner() {
  return (
    <div role="status" className="flex justify-center py-24">
      <span className="size-10 animate-spin rounded-full border-3 border-line border-t-heart" />
      <span className="sr-only">Loading photos</span>
    </div>
  )
}

export default Spinner
