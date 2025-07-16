export const getPost = async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};
