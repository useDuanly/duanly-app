import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { posts } from '../lib/Profile'
import Image from 'next/image'

const Post = () => {
  const router = useRouter()

  const currentPost = posts.filter(post => post.title === router.query.title)[0]

  return (
    <Layout title={router.query.title} footer={false}>
      <div className='text-center'>
        <Image
          src={currentPost?.imageURL}
          alt=''
          className='img-fluid'
          layout=''
          width={800}
          height='300'
        />
        <p className='p-4'>{currentPost?.content}</p>
      </div>
    </Layout>
  )
}

export default Post
