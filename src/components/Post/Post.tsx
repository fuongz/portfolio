import styles from '@/styles/Post/Post.module.css'
import { Post as PostType } from '../../@types/Post'

interface PostProps {
  post: PostType
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles['post']}>
      <div className={styles['post__data']}>
        <h3 className={styles['post__title']}>{post.frontmatter.title}</h3>
        <div className={styles['post__meta']}>
          <div className={styles['post__date']}>{post.frontmatter.date}</div>
          <div className={styles['post__tags']}>
            {post.frontmatter.tags.length > 0 &&
              post.frontmatter.tags.map((tag) => (
                <span key={`tag-${post.slug}-${tag}`} className={styles['post__tag']}>
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
