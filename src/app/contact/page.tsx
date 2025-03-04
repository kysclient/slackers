import MainContainer from '@/components/containers/main-container'
import { Separator } from '@/components/ui/separator'
import { Head } from 'next/document'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <Head>SLAKERS | 연락하기</Head>

      <MainContainer>
        <section className="max-w-[600px] mx-auto">
          <div className="space-y-6 flex flex-col w-full px-4 pt-[20px]">
            <div className="">
              <h3 className="text-lg font-medium">연락하기</h3>
            </div>
            <Separator />
            <p>
              SLACKERS에 문의하세요 저에게 연락할 수 있는 몇 가지 옵션이 있습니다.{' '}
              <Link className="text-primary" href={'mailto:kysclient@gmail.com'}>
                이메일
              </Link>
              을 보내거나,{' '}
              <Link className="text-primary" href={'https://open.kakao.com/o/snTfhYjg'}>
                KakaTalk
              </Link>
              에서 저에게 연락하세요. 모든 사람에게 답장을 보내도록 노력하겠습니다!
            </p>
          </div>
        </section>
      </MainContainer>
    </div>
  )
}
