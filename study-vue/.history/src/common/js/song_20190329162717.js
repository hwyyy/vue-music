
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
        url: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`,
        singer: filterSinger(musicData.singer)
        http://dl.stream.qqmusic.qq.com/C40000128N3r2SYKMF.m4a?guid=3928496296&vkey=2A99862E91A3E4A27ECCFAE1AB06EAD2A8CA3A4807951D9F25F2E56579CDD0874B02262FBE12DA7BF3E40F948E4F773CEB8EEE492F65D47B&uin=0&fromtag=38
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

  