import JsWebm from "./JsWebm";

async function demux(uri) {
    const demuxer = new JsWebm();
    const res = await fetch(uri);
    const buffer = await res.arrayBuffer();
    // debugger
    demuxer.queueData(buffer);
    while (!demuxer.eof) {
        demuxer.demux();
    }
    console.log(demuxer)
}

demux('/Big_Buck_Bunny_Trailer_1080p.webm')
