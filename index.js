const service = require('express')();

const streams = [
  { name: '1LIVE', url: 'http://wdr-1live-live.icecast.wdr.de/wdr/1live/live/mp3/128/stream.mp3' },
  { name: 'WDR2', url: 'http://wdr-wdr2-rheinruhr.icecast.wdr.de/wdr/wdr2/rheinruhr/mp3/128/stream.mp3' },
  { name: 'WDR3', url: 'http://wdr-wdr3-live.icecast.wdr.de/wdr/wdr3/live/mp3/256/stream.mp3' },
  { name: 'WDR4', url: 'http://wdr-wdr4-live.icecast.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3' },
  { name: 'WDR5', url: 'http://wdr-wdr5-live.icecast.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3' },
  { name: '89.0 RTL', url: 'http://stream.89.0rtl.de/live/mp3-256/stream.89.0rtl.de/play.m3u' },
  { name: 'Antenne Niederrhein', url: 'http://edge.live.mp3.mdn.newmedia.nacamar.net/ps-antennenr/livestream.mp3.m3u' },
  { name: 'Big FM', url: 'http://srv04.bigstreams.de/bigfm-mp3-64.m3u' },
  { name: 'DasDing', url: 'http://www.dradio.de/streaming/dradiowissen.m3u' },
  { name: 'DRadio Wissen', url: 'http://www.wdr.de/wdrlive/media/wdr5.m3u' },
  { name: 'Energy Hamburg', url: 'http://www.listenlive.eu/energyhamburg.m3u' },
  { name: 'ffn', url: 'player.ffn.de/ffn.m3u' },
  { name: 'Kiss FM', url: 'http://www.listenlive.eu/kissfmde.m3u' },
  { name: 'N-Joy', url: 'http://www.ndr.de/resources/metadaten/audio/m3u/n-joy.m3u' },
  { name: 'Radio Bob!', url: 'http://streams.radiobob.de/bob-live/mp3-128/streams.radiobob.de/play.m3u' },
  { name: 'Radio Bob! Classic Rock', url: 'http://streams.radiobob.de/bob-classicrock/mp3-192/listenlive/play.m3u' },
  { name: 'SPORT1.fm', url: 'http://www.listenlive.eu/sport1.m3u' }
];

service.get('/streams', (req, res) => {
  res.status(200).json(streams);
});

service.listen(process.env.PORT);
