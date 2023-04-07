/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
	// Write your code here

	const counts = {};
	const results = [];

	for (const string of stringList) {
		//   if (counts[string]) {
		//     counts[string]++;
		//   } else {
		//     counts[string] = 1;
		//   }

		counts[string] = (counts[string] || 0) + 1;
	}

	for (const query of queries) {
		//   const count = counts[query] || 0;
		results.push(counts[query] || 0);
		//   results.push(count);
	}
	return results;
}

matchingStrings(["abc", "ac", "ac", "ab"], ["ab", "abc", "ac"]);
