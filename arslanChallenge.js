let users = [
	{
		name: "mehmood",
		age: 25,
		gender: "male",
	},
	{
		name: "arslan",
		age: 40,
		gender: "male",
	},
	{
		name: "Ayesha",
		age: 30,
		gender: "Female",
	},
];

// last 1st 2nd

// users.forEach((user, index) => {
// 	const keys = Object.keys(user);
// 	console.log(user[keys[index]]);
// });

// for (let i = 0; i < users.length; i++) {
// 	const keys = Object.values(users[i]);
// 	console.log(keys[i]);
// }

let index = users.length - 1;
for (let i = 0; i < users.length; i++) {
	const keys = Object.values(users[i]);
	if (i === 0) {
		console.log(keys[2]);
	}
	if (i === 1) {
		console.log(keys[0]);
	}
	if (i === 2) {
		console.log(keys[1]);
	}
}
