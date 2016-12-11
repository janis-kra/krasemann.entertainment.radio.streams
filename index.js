const service = require('express')();

const streams = [
  {
    name: '1live',
    url: 'http://1live.akacast.akamaistream.net/7/706/119434/v1/gnl.akacast.akamaistream.net/1live'
  },
  {
    name: 'wdr2',
    url: 'https://www.wdr.de/wdrlive/media/hls/wdr2-rhein-und-ruhr.m3u8'
  }
];

service.get('/streams', (req, res) => {
  res.status(200).json(streams);
});

service.listen(process.env.PORT);
