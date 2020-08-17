import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";

/**
 * Functional react component for the file AWS S3 tags.
 * @function
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const FileTags = ({ tags, file }) => {
    const fileTags = tags.map(({ Key, Value }, i) => (
        <ListItem divider={i !== file.TagSet.length - 1} key={Key}>
            <ListItemIcon>
                <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary={Key} secondary={Value} />
        </ListItem>
    ));

    return (
        <div data-test="component-file-tags">
            <Typography variant="h6" component="h3">
                Tags
            </Typography>
            {tags && tags.length > 0 ? (
                <List>{fileTags}</List>
            ) : (
                <Box py={2}>
                    <Alert severity="info">No tags found.</Alert>
                </Box>
            )}
        </div>
    );
};

FileTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    file: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FileTags;
