import './Human.css'

export function Human() {
  const human = {
    name: "Ada Lovelace",
    birthday: "10.12.1815",
    photo: "https://www.womenintech.co.uk/wp-content/uploads/2024/10/Ada-3.png.webp",
    biography: "Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852)"
      + " also known as Ada Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. "
      + "She was the first to recognise that the machine had applications beyond pure calculation. "
  };

  return (
    <>
      <img src={human.photo} alt="Human"></img>
      <div>
        <p>{human.name}</p>
        <p>{human.birthday}</p>
      </div>
      <p>{human.biography}</p>
    </>
  );
}