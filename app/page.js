import BlogCard from "@/components/BlogCard"

import styles from './styles.module.css';

async function getPost() {
    const response = await  fetch('https://dummyjson.com/posts?limit=10')
    return response.json();
}

export default async function Home() {
    const { posts } = await getPost();
    
    console.log(posts);

    return (
        <div className={styles.blogContainer}>
            {posts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                    ))}
        </div>
    );
}
