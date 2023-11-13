import CloudImage from '@/components/CloudImage'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStore, getDataNoStoreLocal } from '@/utils/getData'
import Link from 'next/link'

export default async function Blog() {
  const data: activitiesData[] = await getDataNoStoreLocal('posts')

  return (
    <div className="mx-auto my-6 flex max-w-5xl flex-col gap-y-8 sm:gap-y-4">
      {/* Blog Post Card */}

      {Array.isArray(data) &&
        data?.map((item: activitiesData) => (
          <Link
            key={item.id}
            href={`/blog/${item.slug}`}
            className="mx-4 flex flex-col justify-around rounded-md bg-slate-200/70 transition-colors duration-300 ease-in-out hover:bg-slate-200 sm:flex-row xl:mx-0"
          >
            <CloudImage
              src={item.imgUrl}
              alt={item.title}
              height={500}
              width={500}
              customStyles="h-72 w-[450px] rounded-t-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100 sm:rounded-s-md sm:rounded-tr-none md:h-80"
            />
            <div className=" mt-8 flex flex-col gap-y-2 pb-1 pl-1 sm:pl-8">
              <p className="mt-4 text-sm">{item.createdAt.substring(0, 10)}</p>
              <h1 className="text-3xl font-semibold md:text-2xl">
                {item.title}
              </h1>
              <div
                className="md:text-sm lg:text-base"
                dangerouslySetInnerHTML={{
                  __html: item.desc.substring(0, 200),
                }}
              />
            </div>
          </Link>
        ))}
    </div>
  )
}
