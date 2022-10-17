import React from 'react'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

function TopCharts() {
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    console.log(typeof (country));

    const { data, isFetching, error } = useGetTopChartsQuery();
    console.log("Data=>", (data));

    if (isFetching) {
        return <Loader title="Loading top CHarts" />
    }
    if (error && country) {
        return <Error />
    }

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Discover TopCharts
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

export default TopCharts