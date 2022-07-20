import { ActionType } from '../ActionTypes/ActionContstant'

//initializing the state here
const initProdState = {
    products: [
        {
            "img": "https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL320_.jpg",
            "name": "Roku Streaming Stick 4K 2021",
            "desc": "Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls",
            "price": "$29.99"
        },
        {
            "img": "https://m.media-amazon.com/images/I/717dWfmxXVL._AC_UL320_.jpg",
            "name": "Roku Express | HD Streaming Media",
            "desc": "Player with High Speed HDMI Cable and Simple Remote",
            "price": "$19.99"
        },
        {
            "img": "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
            "name": "Sceptre 24 inch Professional Thin 75Hz",
            "desc": "1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
            "price": "$99.99"
        },
        {
            "img": "https://m.media-amazon.com/images/I/712xpaJPT6L._AC_UL320_.jpg",
            "name": "Logitech C922x Pro Stream Webcam ",
            "desc": "Full 1080p HD Camera",
            "price": "$109.99"
        }
    ]
}

console.log(initProdState)
export const setProductReducers = (state = initProdState, { type, payload }) => {
    console.log(state)
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return state;
        
        default:
            return state;
    }
}