// src/utils/loader.js
export class ResourceLoader {
    constructor() {
        this.resources = {
            images: [],
            data: false,
            vue: false,
            total: 0,
            loaded: 0
        }
        this.callbacks = []
        this.statusElement = document.getElementById('loading-status')
        this.progressElement = document.getElementById('loading-progress')
    }

    addImage(url) {
        this.resources.images.push(url)
        this.resources.total++
    }

    markDataLoaded() {
        this.resources.data = true
        this.resources.loaded++
        this.updateProgress('Data loaded')
    }

    markVueLoaded() {
        this.resources.vue = true
        this.resources.loaded++
        this.updateProgress('Vue ready')
    }

    updateProgress(message) {
        const progress = (this.resources.loaded / (this.resources.total + 2)) * 100 // +2 for data and vue
        if (this.progressElement) {
            this.progressElement.style.width = `${progress}%`
        }
        if (this.statusElement && message) {
            this.statusElement.textContent = message
        }
        this.checkComplete()
    }

    checkComplete() {
        if (this.resources.loaded === this.resources.total + 2) {
            setTimeout(() => {
                this.callbacks.forEach(cb => cb())
            }, 500) // Small delay for smooth transition
        }
    }

    onComplete(callback) {
        this.callbacks.push(callback)
    }

    loadImages() {
        return Promise.all(this.resources.images.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.onload = () => {
                    this.resources.loaded++
                    this.updateProgress(`Loaded image: ${url.split('/').pop()}`)
                    resolve()
                }
                img.onerror = reject
                img.src = url
            })
        }))
    }
}

export const appLoader = new ResourceLoader()

// Add critical images to preload
appLoader.addImage('/assets/logo_2_gakala.png')
appLoader.addImage('/assets/img1.jpg')
appLoader.addImage('/assets/img2.jpg')
appLoader.addImage('/assets/img4.jpg')
appLoader.addImage('/assets/img5.jpg')
appLoader.addImage('/assets/img6.jpg')