import React from "react";
import { useConfirm } from "material-ui-confirm";
import snackbarContext from "../contexts/snackbarContext";
import { FileUpload } from "./FileUpload";
import { FilePopup } from "./FilePopup";
import { FileArchive } from "./FileArchive";
import { getFiles, deleteFile, getFile } from "../actions/hookActions";

/**
 * Functional react component for the file management panel.
 * @function
 * @returns {JSX.Element} - Rendered component
 */
const FilePanel = () => {
    const confirm = useConfirm();

    const [files, setFiles] = React.useState([]);
    const [currentFile, setCurrentFile] = React.useState(null);
    const [, setSnackbar] = snackbarContext.useSnackbar();
    const [popup, setPopup] = React.useState(false);
    const [archiveLoading, setArchiveLoading] = React.useState(true);
    const [fileLoading, setFileLoading] = React.useState(false);

    /**
     * Load the initial files in the archive.
     * @function
     */
    const loadData = async () => {
        const { data } = await getFiles();

        setFiles(data);

        setArchiveLoading(false);
    };

    React.useEffect(() => {
        loadData();
    }, []);

    /**
     * Remove a file from the file list and show the a success message.
     * @function
     * @param {number} index - Index of the file
     * @param {string} slug - Slug name of the file
     */
    const deleteFileItem = async (index, slug) => {
        const { message } = await deleteFile(slug);

        setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));

        setSnackbar({ isVisible: true, message });
    };

    /**
     * Show a confirm dialog prompting to delete the file or not.
     * @function
     * @param {number} index - Index of the file
     * @param {string} slug - Slug name of the file
     */
    const handleFileDelete = (index, slug) => {
        confirm({
            description: "Are you sure you want to delete this file?",
        }).then(() => {
            deleteFileItem(index, slug);
        });
    };

    /**
     * Add a file to the list and show a success message.
     * @function
     * @param {File} file - The uploaded file
     */
    const handleFileCreate = (file) => {
        setFiles((prevFiles) => [file, ...prevFiles]);

        setSnackbar({
            isVisible: true,
            message: "File uploaded successfully.",
        });
    };

    /**
     * Launch a pop up passing the currently selected file.
     * @function
     * @param {string} slug - Slug name of the file
     */
    const handleFileView = async (slug) => {
        setPopup(true);
        setFileLoading(true);

        const { data } = await getFile(slug);

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
