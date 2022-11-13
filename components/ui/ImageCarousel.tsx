import { Card } from '@mui/material'
import { useEffect, useState } from 'react'
import ImageGallery from 'react-simple-image-slider'
import useWindowDimensions from '../../utils/useWindowDimensions'

const images = [
  { url: 'img-1.jpg'},
  { url: 'img-2.jpg'},
  { url: 'img-3.jpg'},
  { url: 'img-4.jpg'},
  { url: 'img-5.jpg'},
  { url: 'img-6.jpg'},
  { url: 'img-7.jpg'},
]

export default function ImageCarousel() {
  const [carouselSize, setCarouselSize] = useState<{ width: number|string, height: number|string }>({ width: '0px', height: '0px' })
  const windowSize = useWindowDimensions()

  useEffect(() => {
    if (windowSize.width > 864) {
      setCarouselSize({ width: '800px', height: '540px' })
      return
    }

    if (windowSize.width > 664) {
      setCarouselSize({ width: '600px', height: '400px' })
      return
    }

    setCarouselSize({ width: '360px', height: '340px' })
  }, [windowSize])

  return (
    <Card
      sx={{
        width: carouselSize.width,
        height: carouselSize.height,
        position: 'relative',
      }}
      className='center-card'
    >
      <ImageGallery
        width='100%'
        height='100%'
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </Card>
  )
}
