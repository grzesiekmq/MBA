# MBA

Market Basket Analysis (MBA) using the Apriori algorithm — JavaScript implementation for browser environments.

## Overview

This project demonstrates Market Basket Analysis using the Apriori algorithm.  
It is written in pure JavaScript and runs directly in the browser without requiring Node.js or npm.

## Features

- Apriori algorithm for mining frequent itemsets and association rules  
- Uses external libraries loaded directly via CDN or included scripts  
- Loads transaction data from CSV file or in-memory arrays  
- Simple web interface (`index.html`) for experimentation and learning

## Installation & Usage

Simply clone the repository and open the `index.html` file in your web browser:

```bash
git clone https://github.com/grzesiekmq/MBA.git
```
Then open MBA/index.html in your browser — no setup or build step required.

## Dependencies

Dependencies are loaded directly in index.html via CDN or included locally:

js-combinatorics (or others if used)

All necessary scripts are linked or embedded in index.html


## Project Structure

MBA/
├── index.html           # Main web interface
├── app.js               # Apriori logic and UI handling
├── transactions.csv     # Sample transaction data
└── README.md

## Status

Educational prototype, not optimized for large datasets.

## License

MIT


---

README assisted by ChatGPT.
