import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import { PostDetails } from './assets/PostDetails';
import { NotFound } from './assets/NotFound';
import { About } from './assets/About';
import { Blog } from './assets/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:slug" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;