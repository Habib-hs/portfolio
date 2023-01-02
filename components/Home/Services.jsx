import React from 'react'

import Section from "../Customs/Section"
import ServiceCard from "../Customs/ServiceCard"
import { HiOutlinePencilAlt, HiOutlineChartBar, HiOutlineMoon, HiOutlineDeviceMobile } from "react-icons/hi"

const Services = () => {
    const data = [
        { title: "Problem Solving", description: "Solved more than 400 problems on different online judges", icon: <HiOutlinePencilAlt className="w-6 h-6 stroke-2" /> },

        { title: "Design", description: "HTML5, CSS3, Bootstrap, Taliwind Css, React", icon: <HiOutlineChartBar className="w-6 h-6 stroke-2" /> },
        
        { title: "Development", description: "Node.js, Express.js, MongoDB, Moongoose", icon: <HiOutlineDeviceMobile className="w-6 h-6 stroke-2" /> },

        { title: "Research", description: "Have a sound knowledge in research field (Machine Learning)", icon: <HiOutlineMoon className="w-6 h-6 stroke-2" /> },

        { title: "Education", description: "Bacelor of Science  - Daffodil International University - CGPA : 3.94 out of 4", icon: <HiOutlinePencilAlt className="w-6 h-6 stroke-2" /> },

        { title: "Programming Language", description: "comfortable with C, C++, Javascript, Java, python", icon: <HiOutlineChartBar className="w-6 h-6 stroke-2" /> },

        { title: "Team Member", description: "Did 10+ projects in University as a team member", icon: <HiOutlineDeviceMobile className="w-6 h-6 stroke-2" /> },

        { title: "Volunteering", description: "I organize a lot of seminars, programming competition and many events during university life", icon: <HiOutlineMoon className="w-6 h-6 stroke-2" /> }
    ]

    return (
        <Section id="services" title="Skills" description="Lorem ipsum dolor sit adipisicing elit. Facere, quos! Et asperiores ut dolorem dignissimos possimus, molestiae nemo." subtitle="what I can do for you ?">
            <div className="flex flex-wrap justify-center items-center">
                {data.map(({ title, description, icon }, index) => (
                    <ServiceCard key={index} icon={icon} title={title} description={description} />
                ))}
            </div>
        </Section>

    )
}


export default Services