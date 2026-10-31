function ErrorMessage({ message }) {
  return (
    <div role="alert" className="animate-rise py-24 text-center">
      <p className="font-display text-2xl">Something went wrong</p>
      <p className="mt-2 text-muted">{message}</p>
    </div>
  )
}

export default ErrorMessage
