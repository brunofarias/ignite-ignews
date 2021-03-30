import Head from 'next/head'
import styles from '../../styles/pages/postsMain.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>10 de Abril</time>
            <strong>Title</strong>
            <p>Posts</p>
          </a>
        </div>
      </main>
    </>
  );
}