import {choice, remove} from "./helpers";
import fruits from "./food";


let randomfruit = choice();
let remainingFruits = remove(fruits, randomfruit);
console.log("I'd like one", randomfruit , ", please.");
console.log("Here you go:", randomfruit );
console.log("Delicious! May I have another?");
console.log("I'm sorry, we're all out. We have ", remainingFruits , "left.");

