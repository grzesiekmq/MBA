let item, pairs, pattern, support, productA, countA, confidence;
const itemSet = ["beer", "chips", "eggs", "butter", "milk", "cereals", "bread"];
const transactions = ["beer chips",
  "beer chips",
  "eggs butter",
  "beer chips",
  "beer chips",
  "eggs butter",
  "milk cereals",
  "bread butter"
];
const cmb = Combinatorics.combination(itemSet, 2);
const minSupport = 2;

while (item = cmb.next()) {
  pairs = item.join(" ");
  pattern = new RegExp(pairs);
  support = transactions.reduce((pre, cur) => (cur.match(pattern)) ? ++pre : pre, 0);
  productA = pairs.match(/\w+/);

  if (support > minSupport) {
    countA = transactions.reduce((pre, cur) => (cur.match(productA)) ? ++pre : pre, 0);
    confidence = support / countA;

    document.querySelector("#pairs").innerHTML = `pairs: ${pairs}`;
    document.querySelector("#support").innerHTML = `support: ${support}`;
    document.querySelector("#confidence").innerHTML = `confidence: ${confidence}`;

  }
}
