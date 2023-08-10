import { Post } from '@/lib/sanity/sanity.queries'
import styles from '@/styles/PostList/Post.module.css'
import Link from 'next/link'

interface PostProps {
  post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles['post']}>
      <div className={styles['post__data']}>
        <Link
          href={{
            pathname: `/posts/${post.slug}`,
          }}
          className={styles['post__title']}
        >
          {post.title}
        </Link>
        <div className={styles['post__meta']}>
          <div className={styles['post__date']}>
            {new Intl.DateTimeFormat('en-US').format(
              new Date(post.publishedAt as string)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
