document$.subscribe(({ body }) => {
    const exportParam = new URLSearchParams(location.search).get('export')?.toLowerCase();
    exportParam === 'true' ? do_export() : do_not_export();
});