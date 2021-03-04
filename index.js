/**
 * Creates an interval of server requests with initial wait
 * @param {number} initialWait
 * @param {number} intervalWait
 * @param {number} intervalCounter
 * @param {function} request
 * @param {function} setLoading
 */

export default async (initialWait, intervalWait, intervalCounter, request, setLoading) => {
  setLoading && setLoading(true);
  let counter = initialCounter;
  const pinger = setInterval(async () => {
    if (!counter) {
      clearInterval(pinger);
      setLoading && setLoading(false);
    }
    counter -= 1;
    await request();
  }, intervalWait);
  setTimeout(pinger, initialWait);
};
