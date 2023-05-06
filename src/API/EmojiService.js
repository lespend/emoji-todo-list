import axios from 'axios'

export default class EmojiService {
    static async getAll() {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/googlefonts/emoji-metadata/main/emoji_15_0_ordering.json')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}