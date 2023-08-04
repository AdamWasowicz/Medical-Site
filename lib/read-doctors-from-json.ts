import path from 'path';
import * as fs from 'fs';

export interface IDoctorFile {
    name: string,
    role: string,
    imageUrl: string,
    bio: string
}

const getPathToDoctorFilesDirectory = () => {
    const pathToFiles = path.join(process.cwd(), 'private', 'doctors-files');

    return pathToFiles;
}

const getListOfFiles = () => {
    const pathToFiles = getPathToDoctorFilesDirectory();

    const files: string[] = fs.readdirSync(pathToFiles);
    if (files == null) {
        throw new Error('No files in directory');
    }

    return files;
}

const getDoctorsFilesContent = () => {
    const files: string[] = getListOfFiles();
    const onlyJsonFiles = files.filter(fileName => {
        if (fileName != 'template.json' && fileName.match('/\*.json')) {
            return true;
        }
    })

    const data: IDoctorFile[] = onlyJsonFiles.map(filePath => {
        const rawText = fs.readFileSync(path.join(getPathToDoctorFilesDirectory(), filePath), 'utf8');
        const obj: IDoctorFile = JSON.parse(rawText);
        
        return obj;
    })

    return data;
}

export default getDoctorsFilesContent;