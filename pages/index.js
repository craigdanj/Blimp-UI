import Link from 'next/link'

export default function Home() {
  return (
    <div class="flex flex-col h-full">
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
            <a className="block leading-7">Alerts</a>
          </Link>

          <Link href="/">
            <a className="block leading-7">Buttons</a>
          </Link>
        </div>

        <div className="flex-auto p-8">
          
          <div className="bg-red-200 px-4 py-3 border border-red-300 rounded text-red-700">
            This is a danger alert
          </div>

          <div className="bg-green-200 px-4 py-3 border border-green-300 rounded text-green-700 mt-5">
            This is a success
          </div>

          <div className="bg-yellow-200 px-4 py-3 border border-yellow-300 rounded text-yellow-700 mt-5">
            This is a warning
          </div>

          <div className="bg-blue-200 px-4 py-3 border border-blue-300 rounded text-blue-700 mt-5">
            This is an info alert
          </div>
        </div>

      </div>
    </div>
  )
}
