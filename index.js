const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');

const client = new Client({
	checkUpdate: false
});

const token = readline.question('Enter your token: ');
const name = readline.question('Enter your name: ');
const name2 = readline.question('Enter your ชื่อข้างบน: ');
const name3 = readline.question('Enter your ชื่อปุ่ม: ');
const like = readline.question('Enter your ลิ้งค์ของปุ่ม: ');
const png1 = readline.question('Enter your รูปใหญ่: ');
const png2 = readline.question('Enter your รูปเล็ก: ');



client.on('ready', async () => {
	console.log(`${client.user.username} is online !`);

	const r = new Discord.RichPresence()
		.setApplicationId('1094687374484721784')
		.setType('STREAMING')
		.setURL('https://www.youtube.com/watch?v=uN-61pzR2-k')
		.setState(name) 
		.setName(name)
		.setDetails(name2)
		.setStartTimestamp(Date.now())
    .setAssetsLargeImage(png1)
    .setAssetsSmallImage(png2)
    .addButton(name3, like)
    client.user.setActivity(r);
  });

  client.login(token);
