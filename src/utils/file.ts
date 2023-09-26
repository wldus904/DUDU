const fs = require("fs");

const existFile = (path) => {
    return fs.existsSync(path);
};

const readFile = (path) => {
    if (!existFile(path)) return null;

    let file = null;
    fs.readFileSync(path, (data, error) => {
        if (error) throw error;
        file = JSON.parse(data.toString());
    });

    return file;
};

const writeFile = (path, data) => {
    fs.writeFile(path, JSON.stringify(data), (error) => {
        if (error) throw error;
    });
};

const readAndWriteFile = (path, writer) => {
    const file = readFile(path);
    const newFile = writer(file);
    writeFile(path, newFile);
};

export { existFile, readFile, writeFile, readAndWriteFile };
