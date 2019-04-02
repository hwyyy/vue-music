
export default class Song {
    constructor({id, mid, singer, name, album, duration, image, url}) {
      this.id = id
      this.mid = mid
      this.singer = singer
      this.name = name
      this.album = album
      this.duration = duration
      this.image = image
      this.url = url
    }
}
export function createSong(musicData){
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        url: `http://ws.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=3928496296&vkey=ABFC9E83BD494B58313E5A90F4B43BEA00F48732CC29F2E6332D87DD5B8DBAFC96923361390B54D01551F0AF2B6BA7FAEBEE1962C9861960&uin=0&fromtag=38`,
        singer: filterSinger(musicData.singer)
    })
}
function filterSinger(singer){
    let ret = []
    if(singer){
       singer.map(item => {
           ret.push(item.name)
       })
       return ret.join('/')
    }else{
        return
    }
}

  