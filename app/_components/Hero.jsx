import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-sky-50 flex items-center flex-col ">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
      Take Control of Your


        <strong className="font-extrabold sm:block text-black">  Finances with Ease </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Track your expenses, manage your budget, and achieve your financial goals all in one place!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-violet-400 hover:bg-violet-500 px-12 py-3 text-sm font-medium text-black shadow-md focus:outline-none   sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>


      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 p-4">
  <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
    <span className="absolute h-64 rounded-lg inset-0 border-2 border-dashed border-black"></span>
    <div className="relative  rounded-lg flex h-64 transform items-end border-2  bg-white hover:bg-purple-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 shadow-md">
      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
        {/* <!-- Icon for Card 1 --> */}
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/split-money.png" alt="split-money"/>
        <h2 className="mt-4 text-xl font-medium sm:text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Track Your Expenses</h2>
      </div>
      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
        <h3 className="mt-4 text-xl font-medium sm:text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Track Your Expenses</h3>
        <p className="mt-4 text-sm sm:text-base">
          Effortlessly log your daily expenses and keep an eye on your spending habits.
        </p>
        <p className="mt-8 font-bold">Read more</p>
      </div>
    </div>
  </a>

  <a href="#" className="group relative block h-64 sm:h-80 lg:h-96  ">
    <span className="absolute  h-64 rounded-lg inset-0 border-2 border-dashed border-black"></span>
    <div className="relative rounded-lg flex h-64 transform items-end border-2  bg-white hover:bg-purple-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 shadow-md">
      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
        {/* <!-- Icon for Card 2 --> */}
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/estimate.png" alt="estimate"/>
        <h2 className="mt-4 text-xl font-medium sm:text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Manage Your Budgets</h2>
      </div>
      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
        <h3 className="mt-4 text-xl font-medium sm:text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Manage Your Budgets</h3>
        <p className="mt-4 text-sm sm:text-base">
          Create and manage multiple budgets to stay within your financial limits.
        </p>
        <p className="mt-8 font-bold">Read more</p>
      </div>
    </div>
  </a>

  <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
    <span className="absolute rounded-lg inset-0 border-2 border-dashed border-black h-64"></span>
    <div className="relative rounded-lg flex h-64 transform items-end border-2  bg-white hover:bg-purple-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 shadow-md">
      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
        {/* <!-- Icon for Card 3 --> */}
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/investment.png" alt="investment"/>
        <h2 className="mt-4 text-xl font-medium sm:text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Gain Financial Insights</h2>
      </div>
      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
        <h3 className="mt-4 text-xl font-medium sm:text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Gain Financial Insights</h3>
        <p className="mt-4 text-sm sm:text-base">
          Access detailed reports and analytics to make informed financial decisions.
        </p>
        <p className="mt-8 font-bold">Read more</p>
      </div>
    </div>
  </a>
</div>

</section>



  )
}

export default Hero