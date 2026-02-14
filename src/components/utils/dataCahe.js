// src/utils/dataCache.js
export const dataCache = {
    set(key, data) {
        try {
            localStorage.setItem(`gakala_${key}`, JSON.stringify({
                data,
                timestamp: Date.now()
            }))
        } catch (e) {
            console.warn('Failed to cache data:', e)
        }
    },
    
    get(key, maxAge = 5 * 60 * 1000) { // 5 minutes default
        try {
            const cached = localStorage.getItem(`gakala_${key}`)
            if (!cached) return null
            
            const { data, timestamp } = JSON.parse(cached)
            if (Date.now() - timestamp > maxAge) {
                localStorage.removeItem(`gakala_${key}`)
                return null
            }
            
            return data
        } catch (e) {
            return null
        }
    },
    
    clear(key) {
        if (key) {
            localStorage.removeItem(`gakala_${key}`)
        } else {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('gakala_')) {
                    localStorage.removeItem(key)
                }
            })
        }
    }
}