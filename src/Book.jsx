import './Book.css'

export function Book() {
  const book = {
    name: "Grokking Algorithms",
    author: "Aditya Y. Bhargava",
    genre: "Learning Book",
    pages: 195,
    photo: "https://images.manning.com/book/3/0b325da-eb26-4e50-8a2a-46042c647083/Bhargava-Algorithms_hires.png"
  };

  return (
    <div>
      <img src={book.photo} alt="Book"></img>
      <p>{book.name}</p>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.pages}</p>
    </div>
  );
}