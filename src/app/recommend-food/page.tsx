import RecommendFoodComponent from '@/components/recoomend-food-page/recommend-food-component'
import Head from 'next/head'

export default function RecommendFood() {
  return (
    <div>
      <Head>
        <title>SLAKERS | 오늘의 메뉴 추천</title>
      </Head>

      <section className="max-w-[1200px] mx-auto flex justify-center items-center">
        <RecommendFoodComponent />
      </section>
    </div>
  )
}
