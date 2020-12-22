import Link from 'next/link'

export default function Home() {
  return (
    <div class="flex flex-col h-full">
			{/* Use Layout for sidebar and header */}
      <div className="flex-grow-0 bg-blue-400 py-4 px-8">
        <h1 className="text-white font-bold text-lg">
          <Link href="/">
            <a>Blimp UI</a>
          </Link>
        </h1>
      </div>

      <div className="flex flex-grow">
        <div className="bg-gray-600 text-white w-1/4 p-8">
          <Link href="/">
            <a className="block leading-9">Alerts</a>
          </Link>

          <Link href="/buttons">
            <a className="block leading-9">Buttons</a>
          </Link>
        </div>

        <div className="flex-auto p-8">

          <h1 className="mb-5 text-2xl font-bold text-gray-500">Buttons</h1>
          
        </div>

      </div>
    </div>
  )
}
