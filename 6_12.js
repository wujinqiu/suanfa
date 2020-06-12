
/**
 * 你正在和你的朋友玩 猜数字（Bulls and Cows）游戏：你写下一个数字让你的朋友猜。
 * 每次他猜测后，你给他一个提示，告诉他有多少位数字和确切位置都猜对了（称为“Bulls”, 公牛），
 * 有多少位数字猜对了但是位置不对（称为“Cows”, 奶牛）。你的朋友将会根据提示继续猜，直到猜出秘密数字。
 * 请写出一个根据秘密数字和朋友的猜测数返回提示的函数，用 A 表示公牛，用 B 表示奶牛。
 * 请注意秘密数字和朋友的猜测数都可能含有重复数字。
 * @param {*} secret 
 * @param {*} guess 
 */

var getHint = function(secret, guess) {
	let i = 0, bulls = 0, cows = 0;
	let sec = secret.split('')
	let gue = guess.split('')
	while (i < gue.length) {
		if (gue[i] == sec[i]) {
			sec.splice(i, 1)
			gue.splice(i, 1)
			bulls++
		} else {
			i++
		}
	}
	i = 0

	while (i < gue.length) {
		console.log(1)
		let index = sec.indexOf(gue[i])
		if (index > -1) {
			sec.splice(index, 1)
			cows++
		}
		i++
	}

	return `${bulls}A${rows}B`
};
console.log(getHint("11", "11"))