import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Maven Green Energy - Sustainable Solar Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
// Image generation
export default async function OgImage() {
  // Fetch the logo image
  const logoData = await fetch(new URL('../public/logo.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            // @ts-ignore
            src={logoData}
            alt="Maven Green Energy Logo"
            width="400"
            height="200"
            style={{
              objectFit: 'contain',
              marginBottom: '40px',
            }}
          />
          <div
            style={{
              fontSize: '56px',
              fontWeight: '600',
              color: '#2d5016',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Sustainable Solar Solutions for a Brighter Future
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#558b2f',
              display: 'flex',
              gap: '40px',
              marginTop: '20px',
            }}
          >
            <span>☀️ Residential</span>
            <span>🏢 Commercial</span>
            <span>🏭 Industrial</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
