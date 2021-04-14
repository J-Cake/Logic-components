import fs from 'fs';

const writer = fs.createWriteStream('./rom.lxb', {encoding: null});

const ROMSize = Number(process.argv.find(i => i.match(/--romSize=(\d+)/))?.match(/--romSize=(\d+)/)?.[1]);

if (isNaN(ROMSize))
    throw 'Please specify ROM size with `--romSize` flag';

for (let i = 0; i < ROMSize; i++)
    writer.write(Buffer.alloc(1, Math.floor(Math.random() * 256)));

