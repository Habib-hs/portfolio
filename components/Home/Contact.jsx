import React from 'react'
import Section from "../Customs/Section"

const Contact = () => {
    const initialState = { email: "", name: "", message: "" }
    const [userData, setUserData] = React.useState(initialState);
    const { email, name, message } = userData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        })
       // alert(`name : ${formData.name} \nemail : ${formData.email} \nmessage : ${formData.message} `)
       alert(`your mail has been sent.`)
    }

    return (
        <Section id="contact" title="Contact Me" subtitle="connect with me" description=" You can talk to me by flling this form. I will try my best to get back to you.">
            <div className=" mx-auto flex lg:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 w-full shadow-normal flex-1 mx-auto rounded-lg lg:mr-10 overflow-hidden p-4 pt-56 flex items-end justify-start relative">
                    <div className='mx-auto'>
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://www.google.com/maps/d/u/0/viewer?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ll=23.808565190640483%2C90.44861034636834&z=13"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.85)" }}
                        />
                        </div>
                    <div className="dark:bg-paperDark bg-paper relative text-xs flex flex-wrap py-6 pr-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold tracking-widest">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Dhanmondi, Dhaka, Bangladesh
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                            <div>
                            <h2 className="title-font font-semibold  tracking-widest">
                                EMAIL
                            </h2>
                            <a className="text-primary leading-relaxed">habibullah.diu@gmail.com</a>
                            </div>
                            <div>
                            <h2 className="title-font font-semibold  tracking-widest mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+880 1923 690376</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3  w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-lg mb-1 font-bold title-font">
                        Form Is Here
                    </h2>
                    <p className="leading-relaxed mb-5 text-sm  text-textSecondary dark:text-textSecondary">
                        You can talk to me by flling this form. I will try my best to get back to you.
                    </p>
                    <form onSubmit={handleOnSubmit} className="flex flex-col">

                        <div className="relative mb-4">
                            <div className="leading-7 text-sm mb-2 text-textPrimary/70 dark:text-textDarkPrimary/70">
                                Name
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                className="w-full dark:bg-paperDark bg-paper rounded-xl border-primary/20 focus:border-primary/80 border-2 focus:primary focus:ring-2 focuprimary text-xs outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <div className="leading-7 text-sm mb-2 text-textPrimary/70 dark:text-textDarkPrimary/70">
                                Email
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                className="w-full dark:bg-paperDark bg-paper rounded-xl border-primary/20 focus:border-primary/80 border-2 focus:primary focus:ring-2 focuprimary text-xs outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <div className="leading-7 text-sm mb-2 text-textPrimary/70 dark:text-textDarkPrimary/70">
                                Message
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleInputChange}
                                className="w-full dark:bg-paperDark bg-paper rounded-xl border-primary/20 focus:border-primary/80 border-2 focus:primary focus:ring-2 focuprimary h-32 text-xs outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button  type="submit" disabled={!email || !name || !message} className={`disabled:bg-paper dark:disabled:bg-paperDark text-white text-center bg-primary hover:bg-secondary focus:outline-none outline-none font-medium rounded-lg text-sm p-1 px-1.5 m-1 md:px-3 md:py-2 transition-all duration-300`}>Submit</button>
                    </form>
                </div>
            </div>
        </Section>
    )
}

export default Contact