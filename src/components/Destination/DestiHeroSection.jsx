import React from 'react'

const DestiHeroSection = ({ country }) => {
    const heading = `Study in ${country.name === "All" ? "Abroad" : country.name }`;

    return (
        <div className='relative bg-black text-white h-[100vh] overflow-hidden'>
            <img 
                loading='lazy' 
                src={country.image} 
                className='absolute top-0 left-0 w-full opacity-20 z-0'
            />

            {/* The container needs a valid className for z-index */}
            <div className='relative z-10 flex flex-col items-center justify-center h-full'>
                <p className='text-3xl mb-4'>{heading}</p>
                <button 
                    className='bg-blue-500 px-4 py-2 rounded text-white'
                    onClick={() => console.log("Clicked")}
                >
                    Click me
                </button>
            </div>
        </div>
    )
}

export default DestiHeroSection
