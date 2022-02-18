const fetchPlus = (url, options = {}, retries) =>
    fetch(url, options)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            if (res.status === 404) {
                throw new Error()
            }
            if (retries > 0) {
                return fetchPlus(url, options, retries - 1)
            }
        })

export default fetchPlus
