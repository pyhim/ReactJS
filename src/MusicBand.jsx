import './MusicBand.css'

export function MusicBand() {
  const musicBand = {
    name: "Radiohead",
    members: "Thom Yorke, Jonny Greenwood, Colin Greenwood, Ed O'Brien",
    albums: "Pablo Honey, The Bends, OK Computer, Kid A, Amnesiac",
    albumCovers: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Radiohead.pablohoney.albumart.jpg/250px-Radiohead.pablohoney.albumart.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Radioheadthebends.png/250px-Radioheadthebends.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Radioheadokcomputer.png/250px-Radioheadokcomputer.png"
    ]
  };

  return (
    <div>
      <img src={musicBand.albumCovers[0]} alt="Album Cover"></img>
      <img src={musicBand.albumCovers[1]} alt="Album Cover"></img>
      <img src={musicBand.albumCovers[2]} alt="Album Cover"></img>
      <p>{musicBand.name}</p>
      <p>{musicBand.members}</p>
      <p>{musicBand.albums}</p>
    </div>
  );
}