export const fetchPosts = async () => {
  const response = await fetch('/posts.json');
  if (!response.ok) throw new Error('فشل في جلب البيانات');
  return response.json();
};