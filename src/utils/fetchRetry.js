const fetchRetry = (url, retries, options = {}) =>
    fetch(url, options)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            if (res.status === 404) {
                throw new Error()
            }
            if (retries > 0) {
                return fetchRetry(url, retries - 1, options)
            }
        })

export default fetchRetry
