const Home = async () => {
  const res = await fetch("http://localhost:3000/api/hello")
  const a = (await res.json()) as {message: string}

  return (
    <div>
      Home<pre>{JSON.stringify(a, null, 2)}</pre>
    </div>
  )
}

export default Home
