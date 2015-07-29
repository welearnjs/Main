function convert(str) {
    return str.replace(/&/g, '&amp;').replace(/<+/g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

}