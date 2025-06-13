import "./FootballClub.css"

const styles = [
  ""
];

function getStyle() {
  const choice = Math.floor(Math.random() * 4);

  return styles[choice];
}

function ClubMembers(props) {
  return (
    <></>
  );
}

function ClubAchievements(props) {
  return (
    <></>
  );
}

function ClubInfo(props) {
  return (
    <div className="club-info">
      <img src={props.coatOfArms} alt="Coat Of Arms"/>
      <span className="line">
        <p>Name:</p>
        <p>{props.name}</p>
      </span>
      <span className="line">
        <p>City:</p>
        <p>{props.city}</p>
      </span>
      <span className="line">
        <p>Date:</p>
        <p>{props.date}</p>
      </span>
    </div>
  );
}

export function FootballClub(props) {
  

  return (
    <div className="football-club">
      <ClubInfo name="Manchester United" city="Manchester" date="1878" coatOfArms="/manuni.png"></ClubInfo>
      <ClubMembers></ClubMembers>
      <ClubAchievements medals></ClubAchievements>
    </div>
  );
}