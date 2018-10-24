const _ = {
	clamp(num, lowerBound, upperBound) {
		const lowerClamped = Math.max(num, lowerBound)
		const clampedVal = Math.min(lowerClamped, upperBound)
		return clampedVal
	},
	inRange(num, start, end) {
		if (end === undefined) {
			end = start
			start = 0
		}
		if (start > end) {
			let temp = end
			end = start
			start = temp
		}
		let isInRange = (start <= num && num < end) ? true : false;
		return isInRange
	},
	words (str) {
		let wordArray = str.split(' ')
		return wordArray
	},
	pad (str, len) {
		if (len <= str.length) {
			return str
		}
		else {
			let startPad = Math.floor((len - str.length)/2)
			let endPad = (len - str.length - startPad)
			let padStr = ' '.repeat(startPad)+str+' '.repeat(endPad)
			return padStr
		}
	}, 
	has (obj, key) { 
		if (typeof obj[key] === 'undefined') { 
			return false }
		else { 
			return true }
	},
	invert (obj) {
		invObj = {}
		for (let key in obj) {
		  let newKey = obj[key]
		  let newVal = key
		  invObj[newKey] = newVal
		}
		return invObj
	},
	findKey (obj, predicate) {
		for (let key in obj) {
			let value = obj[key]
			let predicateReturnValue = predicate(value)
			if (predicateReturnValue === true) {
				return key
			}
		}
		return undefined;
	},
	drop (array, number) {
		if (typeof number === 'undefined') {
			number=1
		}
		let newArray = array.slice(number)
		return newArray
	},
	dropWhile (array, predicate) {
		let dropNumber = array.findIndex((element, index) => {
			return !predicate(element,index);
		})
		let newArray = this.drop(array,dropNumber);
		return newArray
	},
	chunk (array, size) {
		if (typeof size === 'undefined') {
			size=1
		}
		let arrayChunks = []

		for (let i = 0; i < array.length; i=i+size) {
			let arrayChunk = array.slice(i, i+size)
			arrayChunks.push(arrayChunk)
			}
		return arrayChunks
	}

}

// Do not write or modify code below this line.
module.exports = _;

// const testArr = ['1', '2', '3', '4', '5', '6', '7', '8']
// console.log(_.chunk(testArr), 2)

console.log(_.chunk([1, 2, 3, 4], 3))