const { argv } = require('node:process');
const fs = require('fs');

const targetFolderName = argv[argv.length - 1];

const moveFile = (prevFile, destFile) => {
    fs.promises.rename(prevFile, destFile)
}

fs.promises.readdir(`./${targetFolderName}`)
    .then(dataList => {
        const imgList = dataList.filter(data => data.includes('.png') || data.includes('.jpg'));
        const videoList = dataList.filter(data => data.includes('.mp4') || data.includes('.mov'));
        const doplicateList = dataList.filter(data => data.includes('.aae'));
        
        fs.promises.mkdir(`./${targetFolderName}/video`).then(() => {
            videoList.forEach(data => moveFile(`./${targetFolderName}/${data}`, `./${targetFolderName}/video/${data}`))
        });

        fs.promises.mkdir(`./${targetFolderName}/captured`).then(() => {
            imgList.forEach(data => moveFile(`./${targetFolderName}/${data}`, `./${targetFolderName}/captured/${data}`))
        });

        fs.promises.mkdir(`./${targetFolderName}/duplicated`).then(() => {
            doplicateList.forEach(data => moveFile(`./${targetFolderName}/${data}`, `./${targetFolderName}/duplicated/${data}`))
        });
    });