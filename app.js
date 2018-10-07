let item, pairs, pattern, productA, support, confidence, countA, data;
const minSupport = document.querySelector("#minSupport");

const itemSet = new Set();

const transactions = document.querySelector("#transactions");

const config = {
  complete: (results) => {
    data = results.data;
    flattedData = data.flat();
    flattedData.map(el => itemSet.add(el));
    const cmb = Combinatorics.combination(Array.from(itemSet), 2);

    while (item = cmb.next()) {

      pairs = item.join(" ");

      pattern = new RegExp(pairs);

      support = data.map(cur => cur.join(" "))
        .reduce((pre, cur) => (String(cur).match(pattern)) ? ++pre : pre, 0);
      productA = pairs.match(/\w+/);

      function changeMinSupport(minSupportValue) {

        if (support > minSupportValue) {
          countA = data.reduce((pre, cur) => (String(cur).match(productA)) ? ++pre : pre, 0);
          confidence = support / countA;

          document.querySelector("#pairs").innerHTML = `pairs: ${pairs}`;
          document.querySelector("#support").innerHTML = `support: ${support}`;
          document.querySelector("#confidence").innerHTML = `confidence: ${confidence}`;

        }
      }
      minSupport.addEventListener("input", changeMinSupport(minSupport.value));
    }

  }

};

function handleFile(e) {
  let file = e.target.files[0];
  Papa.parse(file, config);

}
transactions.addEventListener("change", handleFile);
