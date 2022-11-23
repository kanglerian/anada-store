import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Kaos = () => {
  return (
    <>
      <Header />
      <Banner />
      <section>
        <div className="container mx-auto">
          <div className='flex flex-wrap lg:flex-nowrap gap-2 px-4'>
            <div className='bg-slate-400 h-[400px] w-full lg:basis-1/3'>

            </div>
            <div className='bg-slate-400 h-[400px] w-full lg:basis-2/3'>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Kaos