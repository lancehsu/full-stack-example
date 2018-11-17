const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://localhost:3443', 'https://localhost:4200'];

const corsOptionsDelegate = (req, cb) => {
  console.log(req.header('Origin'));
  const corsOptions = (whitelist.indexOf(req.header('Origin')) !== -1) ? { origin: true } : { origin: false };
  // if whitelist.indexOf(req.header('Origin')) === -1 -> no such a element in the whitelist
  cb(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
