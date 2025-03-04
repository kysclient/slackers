import MainContainer from '@/components/containers/main-container'
import { Separator } from '@/components/ui/separator'
import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div>
      <Head>SLAKERS | 서비스이용약관</Head>
      <MainContainer>
        <section className="max-w-[600px] mx-auto">
          <div className="space-y-6 flex flex-col w-full px-4 pt-[20px]">
            <div className="">
              <h3 className="text-lg font-medium">서비스 이용 약관</h3>
            </div>
            <Separator />
            <p>
              제1조 (목적)
              <br />
              <br />본 약관은 [SLACKERS] (이하 "서비스")의 이용과 관련하여 서비스 제공자와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              <br />
              <br /> 제2조 (서비스 제공 및 변경)
              <br />
              <br /> 본 서비스는 단어 유사도 게임을 제공하는 웹 기반 서비스입니다.
              <br /> 서비스 제공자는 서비스의 일부 또는 전체를 변경하거나 종료할 수 있으며, 이에 대한 사전 공지는 서비스 내에 게시됩니다.
              <br />
              <br /> 제3조 (이용자의 의무)
              <br />
              <br /> 이용자는 본 서비스를 개인적인 용도로만 사용해야 하며, 자동화된 프로그램을 통한 데이터 수집 및 서비스 악용을 금합니다. <br />
              서비스의 정상적인 운영을 방해하는 행위를 할 경우 이용이 제한될 수 있습니다.
              <br />
              <br /> 제4조 (개인정보 보호 및 데이터 처리) <br />
              <br />
              서비스는 이용자의 입력 데이터를 저장하거나 활용하지 않으며, 사용자의 프라이버시를 존중합니다.
              <br /> 쿠키 또는 로그 데이터를 활용할 수 있으며, 이는 서비스 개선 목적으로만 사용됩니다.
              <br />
              <br /> 제5조 (책임의 한계)
              <br />
              <br /> 서비스는 제공되는 콘텐츠 및 결과의 정확성을 보장하지 않으며, 이를 신뢰하여 발생한 문제에 대한 책임을 지지 않습니다.
              <br />
              <br /> 이용자가 서비스 이용 중 발생한 손해에 대해 서비스 제공자는 법적 책임을 지지 않습니다.
              <br />
              <br /> 제6조 (약관 변경)
              <br />
              <br /> 서비스 제공자는 필요에 따라 본 약관을 변경할 수 있으며, 변경 사항은 서비스 내 공지를 통해 안내됩니다.
            </p>
          </div>
        </section>
      </MainContainer>
    </div>
  )
}
