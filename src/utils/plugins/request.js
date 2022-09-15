import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

const API_SERVER = 'https://api.scryfall.com'

export const request = {
  get(url, ...args) {
    return new Promise((res, rej) => {
      instance
        .get(API_SERVER + url, ...args)
        .then((r) => {
          console.log('%c[Response]', 'color: blue;', r)
          res(r)
        })
        .catch(rej)
    })
  },
  post(url, ...args) {
    return new Promise((res, rej) => {
      instance
        .post(API_SERVER + url, ...args)
        .then((r) => {
          console.log('%c[Response]', 'color: blue;', r)
          res(r)
        })
        .catch(rej)
    })
  },
  async getCardBySeries(series, no, lang = 'zhs') {
    try {
      const res = await this.get(`/cards/${series}/${no}/${lang}`)
      return res.data
    } catch (e) {
      return { error: 404, msg: String(e) }
    }
  },
}

export default function (app) {
  app.config.globalProperties.$$request = request
}
