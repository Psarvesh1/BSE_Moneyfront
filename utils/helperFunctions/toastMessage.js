import FlashMessage, { showMessage } from "react-native-flash-message";

const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: "danger",
        message,
    })
}

export const showSuccess = (message) => {
    showMessage({
        icon: 'success',
        type: 'success',
        message
    })
}
export default showError