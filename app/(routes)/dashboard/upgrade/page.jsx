import React from 'react'

function page() {
  return (
    <div>
      <div className="max-w-screen-xl flex items-center justify-end px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gradient-to-r from-purple-50 to-violet-50">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer hover:bg-slate-50">
      <div className="p-6 sm:px-8 ">
        <h2 className="text-xl font-semibold text-gray-900">
          Starter
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Perfect for individuals and small-scale users just starting to manage their expenses</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Free </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>

        <a
          className="mt-4 block rounded border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary sm:mt-6"
          href="/dashboard/coming"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Track up to 100 expenses per month </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">  Create up to 10 custom expense categories </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Bank Sync </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Multi User-Access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-red-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> Community access </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm  hover:shadow-md cursor-pointer hover:bg-slate-50">
      <div className="p-6 sm:px-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Pro
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">Ideal for power users and small businesses needing more robust expense management tools</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 12$ </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>

        <a
          className="mt-4 block rounded border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary sm:mt-6"
          href="/dashboard/coming"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Unlimited expenses tracking</span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700">  Create unlimited custom expense categories </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Email support </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Bank Sync </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Multi User-Access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> Budgeting Tools </span>
          </li>
        </ul>
      </div>
    </div>

    
    </div>
  </div>
</div>
  )
}

export default page