import BlogPostCard from '@/components/BlogPostCard'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { getData } from '@/hooks/fetchData'
import { activitiesData } from '@/types/randomTypes'

export default async function BlogSection() {
  // const data: activitiesData[] = await getData('events')
  // const latestItem = data.reverse().slice(0, 1)

  return (
    <Container customStyle="py-20 ">
      <TypingTitle title={'Latest Stories'} />
      {/* <div className="mb-5 mt-10"> */}
      {/*   {Array.isArray(latestItem) && */}
      {/*     latestItem?.map((item: activitiesData) => ( */}
      {/*       <BlogPostCard item={item} key={item.id} /> */}
      {/*     ))} */}
      {/* </div> */}
    </Container>
  )
}
