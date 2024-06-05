import path from 'node:path';
import fs from 'node:fs/promises';

const message = 'Hello world';

console.log(message);

const pathToWorkDir = path.join(process.cwd());
console.log(pathToWorkDir);

const pathToFile = path.join(pathToWorkDir, 'someFolder', 'some.txt');
console.log(pathToFile);

const pathToTestFile = path.join(pathToWorkDir, 'src', 'test.txt');

console.log(pathToTestFile);

const data = 'write new Test';

const fsWrite = await fs.writeFile(pathToTestFile, data, 'utf-8');
console.log(fsWrite);

const dataAppend = ' add some text for first text';

const appendFile = await fs.appendFile(pathToTestFile, dataAppend, 'utf-8');

console.log(appendFile);

const fsTotestFile = await fs.readFile(pathToTestFile, 'utf-8');
console.log(fsTotestFile);

const newPathToTestFile = path.join(pathToWorkDir, 'src', 'texxxxxxxt.txt');

const fsRename = await fs.rename(pathToTestFile, newPathToTestFile);
console.log(fsRename);

const deleteFile = await fs.unlink(newPathToTestFile);
console.log(deleteFile);
