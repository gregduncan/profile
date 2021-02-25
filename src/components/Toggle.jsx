export const Toggle = ({ visible, children }) => {
    if (visible) {
        return <>{children}</>;
    } else {
        return null;
    }
};
