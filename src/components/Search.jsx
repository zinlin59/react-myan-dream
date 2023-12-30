import React, { useState } from 'react'
import DreamDictionary from '../DreamDictionary.json'
import Navbar from './Navbar'
const Search = () => {
    const [search, setSearch] = useState('')
    console.log(search)
    return (
        <div className='App'>
            <Navbar />
            <div>
                <h1 className='text-center p-5 font-bold'>Myanmar Dream Dictionary</h1>

                <div class="relative w-auto p-6">
                    <div class="flex pl-7 absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" onChange={(e) => setSearch(e.target.value)} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Dreams..." required="" />

                </div>

                <table class="min-w-full" >
                    <thead class="bg-white border-b">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                #
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Dreams
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {DreamDictionary.map(dream => {
                            return (
                                <>
                                    {
                                        dream.BlogDetail.filter((item) => {
                                            return search.toLocaleLowerCase() === '' ? item : item.BlogContent.toLowerCase().includes(search);
                                        }).map((data) => {
                                            return (
                                                <tr key={data.BlogDetailId} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                                    <td className="w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
                                                        {data.BlogDetailId}
                                                    </td>
                                                    <td className="w-full lg:w-auto p-3 text-gray-800  border border-b block lg:table-cell relative lg:static">
                                                        {data.BlogContent}
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search