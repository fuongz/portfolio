import styles from '@/styles/PostList/PostList.module.css'
import Post from './Post'
import { Post as PostType } from '@/lib/sanity/sanity.queries'
import { AnimatedGroup } from '../core/Animation/animated-group'

interface PostListProps {
  posts: PostType[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <AnimatedGroup
      className={styles['post-list']}
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 1,
              type: 'spring',
              bounce: 0.3,
            },
          },
        },
      }}
    >
      {posts && posts.length > 0 ? (
        posts.map((post, index: number) => (
          <Post key={`post-${index}`} post={post} />
        ))
      ) : (
        <></>
      )}
    </AnimatedGroup>
  )
}

export default PostList
