import MainContainer from '@/components/containers/main-container'
import { Separator } from '@/components/ui/separator'
import Head from 'next/head'

export default function Privacy() {
  return (
    <div>
      <Head>SLAKERS | 개인정보처리방침</Head>

      <MainContainer>
        <section className="max-w-[600px] mx-auto">
          <div className="space-y-6 flex flex-col w-full px-4 pt-[20px]">
            <div className="">
              <h3 className="text-lg font-medium">개인정보 처리 방침</h3>
            </div>
            <Separator />
            <p>개인정보 취급안함</p>
          </div>
        </section>
      </MainContainer>
    </div>
  )
}
