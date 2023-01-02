import React from 'react'

import Link from "next/link"
import Section from '../Customs/Section'

import { FaCodepen, FaFacebookF, FaGithub, FaHackerrank, FaInstagram } from "react-icons/fa"

// I love developing applications that positively impact the world with the help of new emerging technologies. I am keen on Web Application Development, Blockchains, Machine Learning, Data Science, and Robotics. I have worked on various RESTful APIs, Microservices, and Data Analytics projects. I am a forever student and eager to learn and implement new things. <br /><br />

const About = () => {
    const socialLinks = [
        { url: "#", icon: <FaHackerrank className='w-5 h-5' /> },
        { url: "#", icon: <FaGithub className='w-5 h-5' /> },
        { url: "#", icon: <FaCodepen className='w-5 h-5' /> },
        { url: "#", icon: <FaFacebookF className='w-5 h-5' /> },
        { url: "#", icon: <FaInstagram className='w-5 h-5' /> },
    ]

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
For the past five years, I have worked on projects across various domains, including Banking, Finance, and BioInformatics in software engineering. I hold solid professional experience working with teams across the globe.  <br /><br />

In my experiences, I worked as a Software Engineer at Pierian and for Oracle as a Software Consultant under the Financial Services Global Business Unit. I did Customization, Implementation, and Support to Oracle's core banking software Flexcube. I have been a part of the product development team delivering high-quality software following all standard practices, including agile. <br /><br />


I believe that for every problem, there exists a solution. So I always try to understand the issue properly and try to visualize it using drawings and flowcharts. I believe that knowing the problem well is essential, and my first objective is always to understand the problem and then figure out the solution. <br /><br />

I have worked on various technologies and frameworks like NodeJs, NestJs, SpringBoot, MVC, Hibernate, JavaEE, Python, Angular, and Groovy-on-Grails. My interests include coding, application programming, fitness, and financial literacy. <br /><br />

Thank you so much for your time! 
Please feel free to read more about my projects and share your feedback. <br /><br />



                        I am approximately on every social media platform. You can also mail me anytime, I will reply within 24 hours <br />
                    </p>

                    <div className='select-none capitalize flex my-4'>
                        {socialLinks.map(({ icon, url }, index) => (
                            <Link href={url} key={index}>
                                <div className='border-primary border-2 mr-3 mb-3 rounded-full p-2 text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer'>
                                    {icon}
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                </div>

            </div>
        </Section>
    )
}

export default About