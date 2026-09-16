import { useEffect, useState } from 'react';
import { Hero } from '../Hero';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Featured } from './Featured';
import { LatestArticles } from './LatestArticles';
import { Discover } from './Discover';
import { fetchPosts } from '../data/api';
import { JoinUs } from './JoinUs';


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data.posts);
        setCategories(data.categories);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const latestPosts = posts.filter(p => !p.featured).slice(0, 3);

  return (
    <>
      <Nav />
      <Hero />
      {!loading && <Featured posts={featuredPosts} />}
      {!loading && <Discover categories={categories} />}
      {!loading && <LatestArticles posts={latestPosts} />}
      <JoinUs />
      <Footer />
    </>
  );
}