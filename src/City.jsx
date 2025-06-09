import './City.css'

export function City() {
  const city = {
    name: "Oslo",
    country: "Norway",
    created: 1040,
    photo: "https://framerusercontent.com/images/BLUlMX4Sj7Q7wkj8fsv8ezU4Mg.jpeg"
  };

  return (
    <div className='city'>
      <img src={city.photo} alt="City"></img>
      <div>
        <p>{city.name}</p>
        <p>{city.country}</p>
        <p>{city.created}</p>
      </div>
    </div>
  );
}