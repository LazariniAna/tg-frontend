import { ImageResponse } from 'next/og'

export const size = {
    width: 27,
    height: 27  ,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 16,
                    background: '#fff',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    border: '3px solid #00249C',
                    fontWeight: 900,

                }}
            >
                <p style={{
                    color: '#00249C',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    margin: '15px',

                }}>

                    CS
                </p>
            </div>
        ),
        {
            ...size,
        }
    )
}