import Image from 'next/image';
import Slideshow from '@/components/slideshow';
import Header from '@/components/header';
import styles from '../../../styles/post.module.css'; 
import fetchBlogs from '@/app/helpers/fetch-blogs';

const Post = async (props) => {
  const blog = await fetchBlogs(`populate=*&filters[slug][$eq]=${props.params.slug}`);

  const { Title, Category, Images, Content } = blog.data[0].attributes;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{Title}</h1>
        <h2 className={styles.category}>{Category}</h2>
      </div>
      <Slideshow images={Images.data} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: Content[0].children[0].text }} />
    </div>
  );
};

export default Post;
