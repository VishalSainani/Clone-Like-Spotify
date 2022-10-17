import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
function ArtistCard({ track }) {
  const navigation = useNavigate();
  return (
    <div
      className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'
      onClick={() => Navigate((`/artists/${track?.artists[0].adamid}`))}
    >
      <img src={track?.images?.coverart} alt="artist" className='w-full h-56 rounded-lg' />
      <p className='mt-4 font-semibold text-lg text-white truncate'>{track?.subtitle}</p>
      {/* ArtistCard */}
    </div>
  )
}

export default ArtistCard