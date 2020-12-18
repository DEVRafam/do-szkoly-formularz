export default () => {
    const zip = document.getElementById("kod");
    zip.addEventListener("keydown", () => {
        let v = String(zip.value);
        if (v.length > 2 && v.indexOf("-") == -1) {
            zip.value = `${v.slice(0, 2)}-${v.slice(2)}`;
        }
    });
};
