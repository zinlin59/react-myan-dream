import React from 'react'
import DreamDictionary from '../DreamDictionary.json'
import { Link } from 'react-router-dom'
const Cards = () => {
    const valueToPass = 'Hello';
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">

                <Link to={`/item`} state={{ id: 1 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 1 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 2 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 2 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 3 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 3 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 4 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 4 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 5 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 5 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 6 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 6 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 7 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 7 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 8 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20"> {
                        DreamDictionary.map(dream => {
                            return (
                                <div className='box'>
                                    {dream.BlogHeader.map((data) => {
                                        return (
                                            <div key={data.BlogId}>
                                                <p>{data.BlogId === 8 ? data.BlogTitle : null}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }</div>
                </Link>
                <Link to={`/item`} state={{ id: 9 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 9 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 10 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 10 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 11 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 11 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 12 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 12 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 13 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">W
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 13 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }</div>
                </Link>
                <Link to={`/item`} state={{ id: 14 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 14 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 15 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20"> {
                        DreamDictionary.map(dream => {
                            return (
                                <div className='box'>
                                    {dream.BlogHeader.map((data) => {
                                        return (
                                            <div key={data.BlogId}>
                                                <p>{data.BlogId === 15 ? data.BlogTitle : null}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 16 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20"> {
                        DreamDictionary.map(dream => {
                            return (
                                <div className='box'>
                                    {dream.BlogHeader.map((data) => {
                                        return (
                                            <div key={data.BlogId}>
                                                <p>{data.BlogId === 16 ? data.BlogTitle : null}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }</div>
                </Link>
                <Link to={`/item`} state={{ id: 17 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 17 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 18 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 18 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 19 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 19 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 20 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 20 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 21 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 21 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 22 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 22 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 23 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 23 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 24 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 24 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 25 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 25 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>
                <Link to={`/item`} state={{ id: 26 }} >
                    <div className="border border-2 shadow-lg rounded-lg py-20">
                        {
                            DreamDictionary.map(dream => {
                                return (
                                    <div className='box'>
                                        {dream.BlogHeader.map((data) => {
                                            return (
                                                <div key={data.BlogId}>
                                                    <p>{data.BlogId === 26 ? data.BlogTitle : null}</p>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Link>

            </div>
        </div >
    )
}

export default Cards