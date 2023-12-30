import React, { useState } from 'react'
import DreamDictionary from '../DreamDictionary.json'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Items = () => {

    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Navbar />
            <div class="mt-32">
                <div class="px-4 sm:px-8 max-w-5xl m-auto">
                    <h1 class="text-center font-semibold text-lg">Myanmar Dream Dictionary</h1>
                    <h3 class="hidden">{window.num = location.state.id} </h3>

                    <p class="mt-2 text-center text-lg mb-4 text-gray-500">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === window.num ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </p>

                    <ul class="border border-gray-200 rounded overflow-hidden shadow-md">

                        {

                            DreamDictionary.map(dream => {
                                return (
                                    <>
                                        {
                                            dream.BlogDetail.map((data) => {

                                                return (
                                                    <li class="pl-3">
                                                        <>
                                                            {data.BlogId === window.num ? data.BlogContent : null}

                                                        </>
                                                    </li>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>


                </div>
            </div >
            <Footer />
        </div >

    )
}

export default Items