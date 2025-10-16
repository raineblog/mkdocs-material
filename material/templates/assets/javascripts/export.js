function do_export() {
    console.log("export");
}

function do_not_export() {
    console.log("not export");

    load_giscus();
}

document$.subscribe(({ body }) => {
    const exportParam = new URLSearchParams(location.search).get('export')?.toLowerCase();
    exportParam === 'true' ? do_not_print() : do_print();
});
