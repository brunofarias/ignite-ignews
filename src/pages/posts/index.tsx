import { GetStaticProps } from 'next';
import Head from 'next/head';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

import styles from '../../styles/pages/postsMain.module.scss';

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
          <a href="">
            <time>10 de Abril</time>
            <strong>Title</strong>
            <p>Posts</p>
          </a>
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


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100
  })

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}
