import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Icon() {
  // Fetch the logo image
  const logoData = await fetch(new URL('../public/logo.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <img
          // @ts-expect-error - ImageResponse is not typed correctly
          src={logoData}
          alt="Maven Green Energy"
          width="32"
          height="32"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
