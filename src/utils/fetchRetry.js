const fetchRetry = (url, retries, options = {}) =>
    fetch(url, options)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            if (retries > 0) {
                return fetchRetry(url, retries - 1, options)
            }
        })
        .catch(() => {
            if (retries > 0) {
                return fetchRetry(url, retries - 1, options)
            }
        })

export default fetchRetry
