'use client'
import { CldImage } from 'next-cloudinary'

export default function CloudImage({ width, height, src, alt, customStyles }) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={customStyles}
    />
  )
}
