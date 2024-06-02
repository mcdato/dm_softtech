import { formatCurrency } from "../../scripts/utils/money.js";

//test suite (grouping similar tests together)
console.log("test suite: formatcurrency");

//basic test case
console.log("converts cents into dollars");

if (formatCurrency(2095) === "20.95") {
	console.log("passed");
} else {
	console.log("failed");
}

//edge case (with tricky values)
console.log("works with 0");

if (formatCurrency(0) === "0.00") {
	console.log("passed");
} else {
	console.log("failed");
}

//edge case (with tricky values)
console.log("rounds up to the nearest cent");

if (formatCurrency(2000.5) === "20.01") {
	console.log("passed");
} else {
	console.log("failed");
}
