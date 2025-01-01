import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticles = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <SkeletonElement type="text" />
                <SkeletonElement type="title" />
                <SkeletonElement type="title" />
                <SkeletonElement type="title" />
            </div>
            <Shimmer/>
        </div>
    );
};

export default SkeletonArticles;
