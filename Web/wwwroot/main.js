
let fileHandle;

window.ChooseFile = async () => {
    let fileHandlers = await window.showOpenFilePicker({ multiple: false });
    if (fileHandlers.length > 0) {
        fileHandle = fileHandlers[0];
        return fileHandle['name'];
    }
}

window.ReadFile = async () => {
    const file = await fileHandle.getFile();
    const contents = await file.text();
    console.log("Reading file: " + fileHandle['name'] + " and got " + contents.length + " things");
    return contents;
}

window.SaveFile = async () => {
    const file = await fileHandle.createWritable();
    await file.write(contents);
    await file.close();
}
