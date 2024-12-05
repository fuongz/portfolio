import styles from '@/styles/PostList/PostList.module.css'
import Post from './Post'
import { Post as PostType } from '@/lib/sanity/sanity.queries'
import { AnimatedGroup } from '../core/Animation/animated-group'

interface PostListProps {
  posts: PostType[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <AnimatedGroup className={styles['post-list']}>
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
