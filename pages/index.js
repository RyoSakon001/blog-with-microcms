import { Link } from 'react-router-dom';
import { client } from '@/libs/client';
import styles from '@/styles/Home.module.css'

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
}

export default function Home({ blog }) {

  return (
    <>
      <h1 className={styles.title}>Blog</h1>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
