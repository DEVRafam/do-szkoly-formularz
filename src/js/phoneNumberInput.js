export default () => {
    const inp = document.getElementById("phone");
    inp.addEventListener("keyup", () => {
        const v = inp.value;
        const lastChar = v[v.length - 1];
        if (lastChar * 1 != lastChar) return (inp.value = v.slice(0, v.length - 1));
        //
        if (v.length === 3 || v.length === 7) inp.value += " ";
    });
};
