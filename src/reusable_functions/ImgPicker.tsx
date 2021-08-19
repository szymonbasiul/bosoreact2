const ImgPicker = (imgName: string) => {
    return require("../img/" + imgName + ".png").default;
}
export default ImgPicker;