const datify = () => {
    function pad(number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
    
    Date.prototype.YYYYMMDDHHMMSS = function () {
        var yyyy = this.getFullYear().toString();
        var MM = pad(this.getMonth() + 1,2);
        var dd = pad(this.getDate(), 2);
        var hh = pad(this.getHours(), 2);
        var mm = pad(this.getMinutes(), 2)
    
        return yyyy + dd + MM +  hh + mm;
    };
    
    function getStamp() {
        d = new Date();
        return d.YYYYMMDDHHMMSS();
    }
    
    var result = getStamp()

    navigator.clipboard.writeText(result).then(
        function () {
            console.log("successfully copied to the clipboard");
        },
        function () {
            console.log("failed to copy to the clipboard");
        }
    )
}

browser.browserAction.onClicked.addListener(datify);