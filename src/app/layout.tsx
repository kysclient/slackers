import type { Metadata } from 'next'
import './globals.css'
import RootContainer from '@/components/containers/root-container'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: '슬래커스 | 일상이 지루한 직장인들을 위한 놀이터',
  description: '하루에 만번, 오늘의 단어들을 맞혀보세요. 단어를 입력하면 정답 단어와의 유사도를 보여줍니다. Semantle is an engaging word-guessing game that challenges you to find the hidden word through semantic clues. Sharpen your linguistic skills!',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    type: 'website',
    title: 'SLAKERS | 일상이 지루한 직장인들을 위한 놀이터',
    description: '하루에 만번, 오늘의 단어들을 맞혀보세요. 단어를 입력하면 정답 단어와의 유사도를 보여줍니다. Semantle is an engaging word-guessing game that challenges you to find the hidden word through semantic clues. Sharpen your linguistic skills!',
    images: [
      {
        url: '/og-image.png', // OG 이미지 경로
        width: 1200,
        height: 630,
        alt: 'OG Image' // OG 이미지 설명
      }
    ]
  },
  keywords: ['슬래커스', '씨멘틀', '단어 게임', '단어 유사도 추측', '유사도 추측 게임', '심심할 때', 'MBTI', 'Word game', 'Wordle', 'Word Chase', 'Semantle', 'Secret word'],
  metadataBase: new URL('https://slackers.site'),
  other: {
    'naver-site-verification': '04dedc39ba91acb6d6dc697420087b097c68c46e'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <title>슬래커스 | 일상이 지루한 직장인들을 위한 놀이터</title>
      </head>
      <body suppressHydrationWarning>
        <RootContainer>{children}</RootContainer>
        <Analytics />
      </body>
    </html>
  )
}
