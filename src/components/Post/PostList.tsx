import styles from '@/styles/Post/PostList.module.css'
import Post from './Post'
import { Post as PostType } from './../../@types/Post'

interface PostListProps {
  posts: PostType[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return <div className={styles['post-list']}>{posts && posts.length > 0 ? posts.map((post, index: number) => <Post key={`post-${index}`} post={post} />) : <></>}</div>
}

export default PostList
