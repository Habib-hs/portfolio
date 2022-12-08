import React from 'react'
import Image from "next/image"

const TestimonialCard = (props) => {
    const { content, author } = props
    return (
        <div className="md:w-1/2 w-full">
            <div className="p-6 m-2 rounded-lg bg-paper dark:bg-paperDark shadow-normal">

                <div className="rounded-lg relative">

                    <p className="text-xs md:text-sm tracking-wider capitalize text-textPrimary/60 dark:text-textDarkPrimary/60">
                        {content}
                    </p>

                    <div className='flex items-center xs:flex-row flex-col pt-4'>
                        <div className='flex items-center flex-grow mb-1 xs:mb-0 w-full'>
                            <div className='min-w-[50px] min-h-[50px] select-none'>
                                <Image src={author.avatar} alt={author.avatar} objectFit="cover" className="flex-1 object-cover rounded-full object-center" height={60} width={60} />
                            </div>
                            <div className='mx-4 w-full'>
                                <p className="flex-shrink mb-1 text-sm tracking-wider capitalize">
                                    {author.name}
                                </p>
                                <p className="text-xs tracking-wider font-extralight capitalize text-textSecondary dark:text-textDarkSecondary">
                                    {author.description}
                                </p>
                            </div>
                        </div>
                        <div className='scale-75 md:min-w-[30px] md:min-h-[30px] select-none'>
                            <svg width="51" height="29" viewBox="0 0 51 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.75">
                                    <path d="M12.4311 0.00142075C7.14984 -0.0798293 2.35609 3.33267 1.21859 7.96392C0.568593 10.8077 1.13734 13.6514 2.84359 15.9264C4.63109 18.3639 7.39359 19.9077 10.4811 20.3139L13.3248 27.3014C13.6498 28.0327 14.3811 28.5202 15.1936 28.5202C16.0061 28.5202 16.7373 28.0327 17.0623 27.3014C17.5498 26.0827 18.1186 24.7827 18.6873 23.5639C20.0686 20.4764 21.4498 17.3077 22.5061 14.0577C23.6436 10.6452 23.1561 6.98892 21.2061 4.22642C19.2561 1.54517 16.1686 0.0826707 12.4311 0.00142075ZM19.8248 13.2452C18.7686 16.3327 17.3873 19.5014 16.0873 22.5077C15.8436 23.1577 15.5186 23.7264 15.2748 24.3764L12.5123 17.7139L11.6186 17.6327C9.01859 17.4702 6.58109 16.1702 5.19984 14.3014C3.98109 12.6764 3.57484 10.6452 4.06234 8.69517C4.87484 5.36392 8.36859 2.92642 12.3498 2.92642H12.4311C15.1936 2.92642 17.4686 4.06392 18.9311 6.01392C20.3123 7.96392 20.6373 10.7264 19.8248 13.2452Z" className='fill-primary stroke-1 stroke-primary'></path>
                                    <path d="M49.0747 4.30772C47.1247 1.54522 44.0372 0.00146484 40.2997 0.00146484C40.2185 0.00146484 40.2185 0.00146484 40.1372 0.00146484C34.9372 0.00146484 30.2247 3.41397 29.0872 7.96397C28.4372 10.8077 29.006 13.6515 30.7122 16.0077C32.4997 18.4452 35.2622 19.989 38.3497 20.3952L41.1935 27.3827C41.5185 28.114 42.2497 28.6015 43.0622 28.6015C43.8747 28.6015 44.606 28.114 44.931 27.3827C45.4185 26.164 45.9872 24.864 46.556 23.6452C47.9372 20.5577 49.3185 17.389 50.3747 14.139C51.5122 10.8077 51.0247 7.07022 49.0747 4.30772ZM47.6935 13.2452C46.6372 16.3327 45.256 19.5015 43.956 22.5077C43.7122 23.1577 43.3872 23.7265 43.1435 24.3765L40.381 17.714L39.4872 17.6327C36.8872 17.4702 34.4497 16.1702 33.0685 14.3015C31.8497 12.6765 31.4435 10.6452 31.931 8.61397C32.7435 5.28272 36.2372 2.84521 40.2185 2.84521H40.2997C43.0622 2.84521 45.3372 3.98272 46.7997 5.93272C48.181 7.96397 48.506 10.7265 47.6935 13.2452Z" className='fill-primary stroke-1 stroke-primary'></path>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
