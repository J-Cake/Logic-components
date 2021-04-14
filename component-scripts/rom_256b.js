let ROM;

storage.fetchData(`ROM-256-${component.component.label}`).then(data => ROM = data ? data : ROM);

component.onClick(async function (renderObj) {
    const files = await dialog.pickFile({
        multiple: false,
        types: [{
            description: 'LogicX Binary Files',
            accept: {'application/octet-stream': ['.bin', '.lxb']}
        }]
    });

    const file = await files.pop()?.getFile();
    if (file) {
        ROM = new Int8Array(await file?.arrayBuffer()).subarray(0, 256);

        if (confirm("The file can be stored in a quick-access manner within your browser. Proceed?"))
            if (renderObj.component.label)
                await storage.saveData(`ROM-256-${renderObj.component.label}`, ROM);
            else
                alert("To save the data, this component requires a label.");
    }
});


component.setComputeFn(function (inputs) {
    try {
        if (inputs[0]) {
            const number = parseInt(component.component.inputNames.slice(1).map((i, a) => inputs[a + 1] ? (inputs[a + 1] ? 1 : 0) : 0).join(''), 2);
            const out = Array.from(ROM[number]?.toString(2).padStart(8, '0')).map(i => i === '1');
            console.log(out);
            return out;
        } else return component.component.outputNames.map(i => false);
    } catch (err) {
        console.error(err);
    }
});