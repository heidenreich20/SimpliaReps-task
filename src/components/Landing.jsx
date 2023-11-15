import LandingBtn from './LandingBtn'

const Landing = () => {
  return (
    <main className='landing-container'>
      <section className='quote-wrapper'>
        <h1 className='landing-quote'>
          &quot;Hangout by a <span className='red-span'>River of Money</span> to Get Some&quot; <span className='custom-span'>-Yoda</span>
        </h1>
        <h2 className='landing-quote'>
          Trillion Dollars a Month
          Flowing into
          Websites & Marketing!
          Get Some of It Now!
        </h2>
        <LandingBtn />
      </section>
    </main>
  )
}

export default Landing
