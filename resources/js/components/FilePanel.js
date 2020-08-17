import React from "react";
import { useConfirm } from "material-ui-confirm";
import hookActions from "../actions/hookActions";
import snackbarContext from "../contexts/snackbarContext";
import { FileUpload } from "./FileUpload";
import { FilePopup } from "./FilePopup";
import { FileArchive } from "./FileArchive";

const FilePanel = () => {
    const confirm = useConfirm();

    const [files, setFiles] = React.useState([]);
    const [currentFile, setCurrentFile] = React.useState(null);
    const [snackbar, setSnackbar] = snackbarContext.useSnackbar();
    const [popup, setPopup] = React.useState(false);
    const [archiveLoading, setArchiveLoading] = React.useState(true);
    const [fileLoading, setFileLoading] = React.useState(false);

    const loadData = async () => {
        const { data } = await hookActions.getFiles();

        setFiles(data);

        setArchiveLoading(false);
    };

    React.useEffect(() => {
        loadData();
    }, []);

    const deleteFile = async (index, slug) => {
        const { message } = await hookActions.deleteFile(slug);

        setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));

        setSnackbar({ isVisible: true, message });
    };

    const handleFileDelete = (index, slug) => {
        confirm({
            description: "Are you sure you want to delete this file?",
        }).then(() => {
            deleteFile(index, slug);
        });
    };

    const handleFileCreate = (file) => {
        setFiles((prevFiles) => [file, ...prevFiles]);

        setSnackbar({
            isVisible: true,
            message: "File uploaded successfully.",
        });
    };

    const handleFileView = async (slug) => {
        setPopup(true);
        setFileLoading(true);

        const { data } = await hookActions.getFile(slug);

        setCurrentFile(data);
        setFileLoading(false);
    };

    return (
        <div data-test="component-file-panel">
            <FileUpload onCreate={handleFileCreate} files={files} />
            <FileArchive
                files={files}
                isLoading={archiveLoading}
                onDelete={handleFileDelete}
                onView={handleFileView}
            />
            <FilePopup
                isOpen={popup}
                isLoading={fileLoading}
                file={currentFile}
                onClose={() => setPopup(false)}
            />
        </div>
    );
};

export default FilePanel;
