import './Recipe.css'

export function Recipe() {
  const Recipe = {
    name: "Ukrainian Borscht",
    ingredients: "onion, beetroot, cabbage, potato, beef, dill",
    steps: "Peel, grate and/or slice all vegetables (keeping sliced potatoes in cold water to prevent browning until ready to use then drain)." +
      "Heat a large soup pot (5 1/2 Qt or larger) over medium/high heat and add 2 Tbsp olive oil. Add grated beets and sauté 10 minutes, stirring occasionally until beets are softened. ",
    photo: "https://www.simplyrecipes.com/thmb/XT2hJDDDkVAc_MvYdod30Da90h8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__12__borscht-vertical-c2-1800-810027aa65b6441389eb0045b4533918.jpg"
  };

  return (
    <div>
      <img src={Recipe.photo} alt="Recipe"></img>
      <p>{Recipe.name}</p>
      <p>{Recipe.ingredients}</p>
      <p>{Recipe.steps}</p>
    </div>
  );
}