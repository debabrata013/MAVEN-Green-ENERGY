import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'MAVEN Green Energy - Sustainable Solar Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function OgImage() {
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
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>☀️</div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#2d5016',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          MAVEN Green Energy
        </div>
        <div
          style={{
            fontSize: '36px',
            color: '#558b2f',
            textAlign: 'center',
          }}
        >
          Sustainable Solar Solutions
        </div>
      </div>
    ),
    size
  )
}
