import React from 'react'
import Navbar from './Navbar';
const Header = () => {
    return (
        <div>
            <Navbar />
            <div>
                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">

                        <div className="max-w-xl sm:mt-1 mt-80 flex flex-col items-center space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-4xl">
                                Myanmar Dream Dictionary
                            </h2>
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" />
                    </div>
                </aside>

                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sahilnetic" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
            </div>
        </div>
    )
}

export default Header