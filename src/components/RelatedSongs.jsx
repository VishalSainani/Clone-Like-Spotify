import React from 'react'
import SongBar from './SongBar'

function RelatedSongs({ data, isPlaying, activeSong, handlePlayClick, handlePauseClick, artistId }) {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs</h1>
      <div className='mt-6 w-full flex flex-col'>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            i={i}
            song={song}
            artistId={artistId}
            isPlaying={isPlaying}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs