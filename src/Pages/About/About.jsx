import React from 'react'
import Aboutimg from '/src/assets/Images/about-img.jpeg'
import PageHero from '../../Components/PageHero'

const About = () => {
  return (
    <main>
      <PageHero title='About' />
      <div className='page section section-center flex flex-wrap md:flex-nowrap gap-6'>
        <img className='h-[500px]' src={Aboutimg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </div>
    </main>
  )
}

export default About