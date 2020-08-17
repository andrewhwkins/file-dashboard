import React from "react";
import PropTypes from "prop-types";
import moment from "moment-mini";
import { withStyles } from "@material-ui/core/styles";
import { useConfirm } from "material-ui-confirm";
import Box from "@material-ui/core/Box";
import { DropzoneAreaBase } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import * as tus from "tus-js-client";
import { slugify, camelize } from "../../helpers";
import Errors from "./FileUploadErrors";
import FileUploadItem from "./FileUploadItem";

const styles = (theme) => ({
    button: {
        margin: theme.spacing(2, 0, 2),
    },
});

const FileUpload = ({ onCreate, classes }) => {
    const confirm = useConfirm();

    const [files, setFiles] = React.useState([]);
    const [fileQueue, setFileQueue] = React.useState([]);
    const [fileMeta, setFileMeta] = React.useState({});
    const [errors, setErrors] = React.useState([]);

    const updateFileMeta = (file, newMeta) => {
        const fileName = camelize(file.name);
        setFileMeta((prevMeta) => ({
            ...prevMeta,
            [fileName]: { ...prevMeta[fileName], ...newMeta },
        }));

        return fileName;
    };

    const clearFileMeta = (file) => {
        const fileName = camelize(file.name);

        if (
            fileMeta[fileName] &&
            fileMeta[fileName].progress !== 100 &&
            fileMeta[fileName].upload
        )
            fileMeta[fileName].upload.abort(true);

        setFileMeta((prevMeta) =>
            Object.keys(prevMeta).reduce((acc, key) => {
                if (key === fileName) return acc;
                acc[key] = prevMeta[key];
                return acc;
            }, {})
        );
    };

    const queueFileDelete = (file) => {
        setFileQueue((prevFileQueue) =>
            prevFileQueue.filter((prevFile) => prevFile !== file.name)
        );
    };

    React.useEffect(() => {
        return () => files.forEach((file) => clearFileMeta(file));
    }, []);

    const uploadFile = (file, index) => {
        const ext = file.name.split(".").pop();
        const filename = file.name.replace(`.${ext}`, "").substring(0, 80);
        const fileSlug = `${slugify(filename, "_")}_${moment().format(
            `YYYY_MM_DD_H_m_ss_SSS_${index}`
        )}.${ext}`;
        const upload = new tus.Upload(file, {
            endpoint: "/tus",
            overridePatchMethod: true,
            resume: false,
            chunkSize: 10000000, // 10 MB
            retryDelays: [0, 1000, 3000, 5000, 10000, 20000],
            metadata: {
                filename: fileSlug,
                filetype: file.type,
                original: `${filename}.${ext}`,
            },
            onError: (error) => {
                console.log(error);
                setErrors((prevErrors) => [...prevErrors, error]);
            },
            onProgress: (bytesUploaded, bytesTotal) => {
                updateFileMeta(file, {
                    progress: (bytesUploaded / bytesTotal) * 100,
                });
            },
            onSuccess: () => {
                setFiles((prevFiles) =>
                    prevFiles.filter((prevFile) => prevFile.name !== file.name)
                );
                clearFileMeta(file);
                onCreate({ file_name: file.name, file_slug: fileSlug });
            },
        });

        return upload;
    };

    const processUploads = () => {
        setFileMeta((prevFileMeta) => ({
            ...prevFileMeta,
            ...files.reduce((acc, file, i) => {
                const upload = uploadFile(file, i);

                if (fileMeta[file.name] && fileMeta[file.name].upload)
                    return acc;

                upload.start();

                queueFileDelete(file);
                const fileName = camelize(file.name);

                return { ...acc, [fileName]: { upload, progress: 0 } };
            }, {}),
        }));
    };
    const handleUpload = async () => {
        processUploads();
    };

    const handleDrop = (droppedFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
        setFileQueue((prevFileQueue) => [
            ...prevFileQueue,
            ...droppedFiles.map((file) => file.name),
        ]);
    };

    const handleStatus = (file, status) => {
        const fileName = updateFileMeta(file, { status });

        fileMeta[fileName].upload[status]();
    };

    const handleFileDelete = (index, file) => {
        confirm({
            description:
                "Are you sure you want to remove this file from the queue?",
        }).then(() => {
            queueFileDelete(file);

            setFiles((prevFiles) =>
                prevFiles.filter((prevFile, i) => i !== index)
            );

            clearFileMeta(file);
        });
    };

    const fileItems = files.map((file, i) => {
        const fileName = camelize(file.name);
        const meta = fileMeta[fileName] || {};

        return (
            <FileUploadItem
                onStart={() => handleStatus(file, "start")}
                onPause={() => handleStatus(file, "abort")}
                onDelete={() => handleFileDelete(i, file)}
                progress={meta.progress}
                status={meta.status}
                upload={meta.upload}
                name={file.name}
                key={fileName}
            />
        );
    });

    return (
        <Box>
            <DropzoneAreaBase
                showFileNamesInPreview
                maxFileSize={107374182400}
                onDrop={handleDrop}
                showPreviews={false}
                showPreviewsInDropzone={false}
                showAlerts={["error", "info"]}
                fileObjects={files}
            />
            {files.length > 0 && <div>{fileItems}</div>}
            {fileQueue.length > 0 && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpload}
                    className={classes.button}
                >
                    Upload {fileQueue.length} Files
                </Button>
            )}
            {errors.length > 0 && <Errors errors={errors} />}
        </Box>
    );
};

FileUpload.propTypes = {
    onCreate: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles, { theme: true })(FileUpload);
