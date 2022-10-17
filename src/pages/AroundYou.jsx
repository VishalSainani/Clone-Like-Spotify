import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

function AroundYou() {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    console.log(typeof (country));

    const { data, isFetching, error } = useGetSongsByCountryQuery(country);
    console.log("Data=>", (data));

    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_5VaOsdhkk3xvpFUXxJpc6Cu8Khwr5')
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    }, [country])

    if (isFetching && loading) {
        return <Loader title="Loading songs around you" />
    }
    if (error && country) {
        return <Error />
    }

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Around You <span className='font-black'>{country}</span>
            </h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {
                    data?.map((song, i) => (
                        <SongCard
                            i={i}
                            key={song.key}
                            song={song}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AroundYou