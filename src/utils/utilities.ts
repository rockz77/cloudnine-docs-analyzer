const bytesConverter = (bytes:number, decimals:number = 1) => {
    let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    let i = 0
    
    for (i; bytes > 1024; i++) {
        bytes /= 1024;
    }

    return parseFloat(bytes.toFixed(decimals)) + ' ' + units[i]
}

export default bytesConverter