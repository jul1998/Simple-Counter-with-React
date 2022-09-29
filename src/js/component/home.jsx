import React from "react";
import Counter from "./counter.jsx"
import Button from "./button.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let count6 = 0
let count5 = 0
let count4 = 0
let count3 = 0
let count2 = 0
let count1 = 0
const Home = () => {

	let second6 = Math.floor((count6++/1) % 10)
	let second5 = Math.floor((count5++/10) % 10)
	let second4 = Math.floor((count4++/100)% 10)
    let second3 = Math.floor((count3++/1000)% 10)
    let second2 = Math.floor((count2++/10000)% 10)
    let second1 = Math.floor((count1++/100000)%10)
	
	return (
		
		<>
		<Counter
		second6 = {second6}
		second5 = {second5}
		second4 = {second4}
		second3 = {second3}
		second2 = {second2}
		second1 = {second1}
		/>
		</>
	);
};

export default Home;
