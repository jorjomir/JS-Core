function validateRequest(input) {

    const methodRegex = /^(GET|POST|DELETE|CONNECT)$/g;
    const uriRegex = /^[A-Za-z0-9.]+$|^\*$/g;
    const versionRegex = /HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/g;
    const messageRegex = /^[^<>\\&'"]+$/g;

    let methodCheck = input.method;
    let uriCheck = input.uri;
    let versionCheck = input.version;
    let messageCheck = input.message;

    if (methodCheck === undefined || !methodRegex.test(methodCheck)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (uriCheck === undefined || !uriRegex.test(uriCheck)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (versionCheck === undefined || !versionRegex.test(versionCheck)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if ((messageCheck === undefined || !messageRegex.test(messageCheck) && messageCheck !== '')) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return input;
}


// validateRequest({
//   method: 'GET',
//   uri: 'svn.public.catalog',
//   version: 'HTTP/1.1',
//   message: ''
// });

// validateRequest({
//   method: 'OPTIONS',
//   uri: 'git.master',
//   version: 'HTTP/1.1',
//   message: '-recursive'
// });

validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});