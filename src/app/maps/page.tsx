'use client'

import { useRef, useState } from 'react'
import { MapRef } from 'react-map-gl'

import { Map } from '@/components/map'
import { Sheet } from '@/components/sheet'
import { cn } from '@/libraries/utils'

export default function MapsPage() {
  const [open, setOpen] = useState(false)
  const mapRef = useRef<MapRef>(null)

  return (
    <>
      <Sheet mapRef={mapRef} open={open} setOpen={setOpen} />
      <div className='mx-auto flex h-[100dvh] w-full bg-[#0047CC]'>
        <div className='my-24 w-full px-24 text-white'>
          <h1 className='text-5xl font-bold'>Key Figures</h1>
          <p className='mt-10'>
            Enel’s g-local commitment told in numbers. Explore the key ones of the Group and the
            Countries leading the energy transition.
          </p>
        </div>
        <div className={cn('relative w-8/12 flex-none')}>
          <div className='absolute z-30 h-full w-32 bg-gradient-to-l from-transparent to-[#0047CC]'></div>
          <Map mapRef={mapRef} setOpen={setOpen} />
        </div>
      </div>
    </>
  )
}
