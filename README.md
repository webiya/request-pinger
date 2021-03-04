# request-pinger

Creates a request interval with initial timeout and number of intervals.

## Installation

```sh
npm install request-pinger
```

or

```sh
yarn add request-pinger
```

## Usage Example

```javascript
import pinger from 'request-pinger';

setLoading = state => console.log(`loading: ${state}`);

const request = async () => {
  const data = await fetch('http://example.com/movies.json')
    .then(response => {
      return response;
    })
    .catch(error => error);

  console.log(data);
};

initialWait = 500; // in milliseconds
intervalWait = 1000; // in milliseconds
initialCounter = 5;

pinger(initialWait, intervalWait, initialCounter, request, setLoading);
```
