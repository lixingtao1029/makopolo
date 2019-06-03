

function ajax(options) {

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest(); 

        var str = '';
        for (key in options.data) {
            str += '&' + key + '=' + options.data[key];
        }

        if (options.method == 'get') {
            xhr.open('get', options.url + '?' + str.slice(1));
            xhr.send();
        } else {
            xhr.open('post', options.url);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(str.slice(1));
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
            }
            if (xhr.readyState != 4 && xhr.status != 200) {
                setTimeout(function () {
                    var obj = {
                        state: xhr.readyState,
                        status: xhr.status
                    }
                    reject(obj);
                }, 3000)
            }
        }
    })

}