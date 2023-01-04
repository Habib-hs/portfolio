import React from 'react'

import Link from "next/link"
import Section from '../Customs/Section'

import { FaCodepen, FaFacebookF, FaGithub, FaHackerrank, FaInstagram } from "react-icons/fa"

// I love developing applications that positively impact the world with the help of new emerging technologies. I am keen on Web Application Development, Blockchains, Machine Learning, Data Science, and Robotics. I have worked on various RESTful APIs, Microservices, and Data Analytics projects. I am a forever student and eager to learn and implement new things. <br /><br />

const About = () => {
    return (
        <Section id="about" className="!relative">    
            <div className='flex sm:flex-row justify-center flex-col px-4'>

                <div className='flex place-items-center w-full sm:w-1/3 mb-50 sm:mb-0'>
                    
                    <h1 className=" capitalize title-font  sm:text-3xl text-2xl mb-2 font-bold">
                        <span className='text-primary'>People </span>
                        ignore designs
                        <br />
                        that ignores
                        <span className='text-primary ml-2'>People </span>
                        <p className=" capitalize mt-6 leading-relaxed text-xs md:text-sm text-textSecondary dark:text-textDarkSecondary">
                        - Frank Chimero
                    </p>
                    </h1>

                   
                </div>

                <div className='w-full sm:w-2/3 mt-2'>
                    <h1 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">
                        Connect With Me
                    </h1>
                    <p className="leading-relaxed text-textSecondary text-xs md:text-sm dark:text-textDarkSecondary">
                    Hello, my name is Md Habibullah Howlader, and I am a Software Enthusiast! 
For the past four years, In university life I have worked on different projects and learn the core and most important core concepts about  software engineering..  <br /><br /> 

I have completed my B.sc in CSE degree from Daffodil International University. In university life, I have three years of experience in Programming. My keen interest in Competitive Programming has enabled me to develop a good knowledge of Software Design and Development. However, I can assure you that I am a quick learner, adaptive well as and energetic person. <br /><br />


I believe that for every problem, there exists a solution. So I always try to understand the issue properly and try to visualize it using drawings and flowcharts. I believe that knowing the problem well is essential, and my first objective is always to understand the problem and then figure out the solution. <br /><br />

 My interests include coding, application programming, fitness, and financial literacy. I love study on different books on different topics.I love to know about technologies and try to keep myself updated.<br /><br />

Thank you so much for your time! 
Please feel free to read more about my projects and share your feedback.
I am approximately on every social media platform. You can also mail me anytime, I will reply within 24 hours <br />
                    </p>

                </div>

            </div>
        </Section>
    )
}

export default About