import "./Skeleton.css"
import PropTypes from "prop-types";
const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`;

    return (
        <div className={classes}>

        </div>
    )
}
SkeletonElement.propTypes = {
    type: PropTypes.string.isRequired, // 'type' must be a string and is required
};

export default SkeletonElement